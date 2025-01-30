import React, { useState } from 'react';
import './UserScreen.css';
import BookList from '../BookList/BookList';

const UserScreen = ({ customerBooks }) => {
    const [hoveredBook, setHoveredBook] = useState(null);

    return (
        <div className="user-screen">
            <h2>Your Books</h2>
            <BookList 
                books={customerBooks} 
                hoveredBook={hoveredBook} 
                setHoveredBook={setHoveredBook} 
            />
        </div>
    );
};

export default UserScreen;