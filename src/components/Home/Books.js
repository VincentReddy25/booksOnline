
import { useState, useEffect } from 'react';
export default function Books() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const importBooks = async () => {
            try {
                const bookContext = require.context("../../assets/books", false, /\.pdf$/);

                const bookFiles = bookContext.keys().map((filename, index) => {
                    // console.log('File path:', filename);
                    const title = filename.replace(/^\.\/|NotesForProfessionals/g, '').replace(/\.pdf$/, '');
                    const book = require(`../../assets/books/${filename.replace(/^\.\//, '')}`);
                    return {
                        id: index + 1,
                        title,
                        author: "goalkicker",
                        download_link: book,
                    };
                });
                // console.log('Books:', bookFiles);
                setBooks(bookFiles);
            } catch (error) {
                console.error('Error importing books:', error);
            }
        };


        importBooks();
    }, []);

    return (
        <>
            <div className="books_container" id="books_container">
                <header>Explore Books</header>

                <div className="books">
                    {books.map(book => (
                        <div className="book_bg" key={book.id}>
                            <div className="book">
                                <p className="book_title">{book.title}</p>
                                <p className="author">by {book.author}</p>
                                <a
                                    // download={book.title}
                                    target='_blank'
                                    href={book.download_link}
                                    className="download_btn download_link" >
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
