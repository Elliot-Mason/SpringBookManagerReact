import React, { useState } from 'react';
import './UserScreen.css';
import BookList from '../BookList/BookList';

const UserScreen = ({ customerBooks }) => {
    const [hoveredBook, setHoveredBook] = useState(null);
    const [showIcons, setShowIcons] = useState(false); // State to manage the visibility of the icons

    return (
        <div className="user-screen">
            <h2>Your Books</h2>
            <div className="book-list-container">
                <BookList 
                    books={customerBooks} 
                    hoveredBook={hoveredBook} 
                    setHoveredBook={setHoveredBook} 
                    showIcons={showIcons} // Pass the showIcons state to BookList
                />
                <button className="edit-books-button" onClick={() => setShowIcons(!showIcons)}>Edit Books</button>
            </div>
        </div>
    );
};

export default UserScreen;