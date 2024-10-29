import React, { useState } from 'react'

const Bookshelf = () => {
    const [books, setBooks] = useState([
        {title: 'Fourth Wing', author: 'Rebecca Yarros'}, 
        {title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({title: '', author: ''});


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook((prevNewBook) => ({
            ...prevNewBook,
            [name]: value,
        }));
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks((prevBooks) => [...prevBooks, newBook]);
        setNewBook({title:'', author: ''});
    };

    return(
        <div>
            {/* 4. Form creation */ }
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Title:
                        <input
                            type='text'
                            name='title'
                            value={newBook.title}
                            onChange={handleInputChange}
                            required
                            />
                    </label>
                </div>
                <div>
                  <label>
                    author:
                    <input
                       type='text'
                       name='author'
                       value={newBook.author}
                       onChange={handleInputChange}
                       required
                       /> 
                    </label>  
                </div>
                <button type='submit'>Add Book</button>
            </form>

            {/* Map through your books */}
            <div>
                {books.map((book, index) => (
                    <div key={index} className='book-card'>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;