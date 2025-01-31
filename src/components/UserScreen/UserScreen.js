import React, { useState, useEffect } from 'react';
import './UserScreen.css';
import BookList from '../BookList/BookList';

const UserScreen = ({ customerBooks, token }) => {
    const [hoveredBook, setHoveredBook] = useState(null);
    const [showIcons, setShowIcons] = useState(false); // State to manage the visibility of the icons
    const [books, setBooks] = useState(customerBooks); // State to manage the list of books
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        console.log("customerBooks prop:", customerBooks); // Log the customerBooks prop
        setBooks(customerBooks); // Ensure books state is updated when customerBooks prop changes
    }, [customerBooks]);

    useEffect(() => {
        sortBooks(sortOrder);
    }, [sortOrder, customerBooks]);

    const sortBooks = (order) => {
        const sortedBooks = [...books].sort((a, b) => {
            if (order === 'asc') {
                return a.rating - b.rating;
            } else {
                return b.rating - a.rating;
            }
        });
        setBooks(sortedBooks);
    };

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    console.log("books state:", books); // Log the books state

    return (
        <div className="user-screen">
            <div className="header">
                <h2>Your Books</h2>
            </div>
            <div className="book-list-container">
                <BookList 
                    books={books} 
                    setBooks={setBooks} // Pass the setBooks function to BookList
                    hoveredBook={hoveredBook} 
                    setHoveredBook={setHoveredBook} 
                    showIcons={showIcons} // Pass the showIcons state to BookList
                    token={token} // Pass the token to BookList
                />
                <div className="buttons-container">
                    <button 
                        className={`edit-books-button ${showIcons ? 'active' : ''}`} 
                        onClick={() => setShowIcons(!showIcons)}
                    >
                        Toggle Edit
                    </button>
                    <button 
                        className="sort-books-button" 
                        onClick={toggleSortOrder}
                    >
                        Sort: {sortOrder === 'asc' ? 'ASC' : 'DESC'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserScreen;