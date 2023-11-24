import { useState,useContext } from "react";
import BooksContext from "../context/Books";
const BookEdit = ({book,onSubmit}) =>{
    const [title,setTitle] = useState(book.title);
    const {editBook} = useContext(BooksContext);
    const handleInput = (e) =>{
        setTitle(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit();
        editBook(book.id,title);
    }
    return(
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleInput}></input>
            <button className="button is-primary">save</button>
        </form>
    )
}

export default BookEdit;