import { createContext, useState,useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

const Provider = ({children}) => {
    const [books, setBooks] = useState([]);
    const fetchBooks = useCallback(async () =>{
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    },[]);
    const editBook = async(id,newTitle)=>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        })
        const updateBooks = books.map((book)=>{
            if(book.id === id)  return {...book,...response.data};
            else return book;
        })
        setBooks(updateBooks);
    }
    const deleteBook = async (id) =>{
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updateList = books.filter((book)=>book.id !== id);
        setBooks(updateList);
    }
    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books",{
            title
        })

        console.log(response);
        const updateBooks = [
            ...books,
            response.data
        ];
        setBooks(updateBooks);
    }

    const valueToShare = {
        books,
        fetchBooks,
        editBook,
        deleteBook,
        createBook
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider};
export default BooksContext;