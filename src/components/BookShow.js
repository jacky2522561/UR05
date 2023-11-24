import { useState,useContext } from "react";
import BooksContext from "../context/Books";
import BookEdit from './BookEdit';
const BookShow = ({ book }) => {
    const [editState,setEditState] = useState(false);
    const {deleteBook} = useContext(BooksContext);
    const handleEdit = ()=>{
        setEditState(!editState);
    }
    const handleDelete = () =>{
        deleteBook(book.id);
    }
    const handleEditFormShow = () =>{
        setEditState(false);

    }
    let content = <h3>{book.title}</h3>
    if(editState){
        content = <BookEdit onSubmit={handleEditFormShow} book = {book} />
    } 
    return (
        <div className="book-show">
            <div>{content}</div>
            <img alt="pic" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            <div className="actions">
                <button className="edit" onClick={handleEdit}>
                    Edit
                </button>
                <button className="delete" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;