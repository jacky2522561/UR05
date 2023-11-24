import {useEffect , useContext} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/Books';
import './index.css';

const App = () => {
    const {fetchBooks} = useContext(BooksContext);

    useEffect(()=>{
        fetchBooks();
    },[fetchBooks]);
   
    return (
        <div>
            <BookList/>
            <BookCreate/>
        </div>
    )
}

export default App;