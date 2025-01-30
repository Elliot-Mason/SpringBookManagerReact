import React from 'react';
import './UserScreen.css';
import BookList from '../BookList/BookList';

const UserScreen = ({ customerBooks }) => {
    console.log("customerBooks in UserScreen:", customerBooks); // Log the customerBooks prop

    return (
        <div className="user-screen">
            <h2>Your Books</h2>
            <BookList books={customerBooks}/> 
        </div>
    );
};

export default UserScreen;