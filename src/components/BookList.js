import BookShow from './BookShow';
import useBooksContext from '../hooks/use-book-context';
const BookList = () => {
    const {books} = useBooksContext();
    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book}/>
    })
    return (
        <div>
            <div className='book-list'>{renderBooks}</div>
        </div>
    )
}

export default BookList;