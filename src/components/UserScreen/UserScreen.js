import React, { useState, useEffect } from 'react';
import './UserScreen.css';
import BookList from '../BookList/BookList';

const UserScreen = ({ customerBooks, token }) => {
    const [hoveredBook, setHoveredBook] = useState(null);
    const [showIcons, setShowIcons] = useState(false); // State to manage the visibility of the icons
    const [books, setBooks] = useState(customerBooks); // State to manage the list of books

    useEffect(() => {
        console.log("customerBooks prop:", customerBooks); // Log the customerBooks prop
        setBooks(customerBooks); // Ensure books state is updated when customerBooks prop changes
    }, [customerBooks]);

    console.log("books state:", books); // Log the books state

    return (
        <div className="user-screen">
            <h2>Your Books</h2>
            <div className="book-list-container">
                <BookList 
                    books={books} 
                    setBooks={setBooks} // Pass the setBooks function to BookList
                    hoveredBook={hoveredBook} 
                    setHoveredBook={setHoveredBook} 
                    showIcons={showIcons} // Pass the showIcons state to BookList
                    token={token} // Pass the token to BookList
                />
                <button 
                    className={`edit-books-button ${showIcons ? 'active' : ''}`} 
                    onClick={() => setShowIcons(!showIcons)}
                >
                    Toggle Edit
                </button>
            </div>
        </div>
    );
};

export default UserScreen;