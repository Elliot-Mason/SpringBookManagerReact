import React, { useState, useEffect } from 'react';
import './UserScreen.css';
import BookList from '../BookList/BookList';
import EditModal from '../EditModal/EditModal';

const UserScreen = ({ customerBooks, token }) => {
    const [hoveredBook, setHoveredBook] = useState(null);
    const [showIcons, setShowIcons] = useState(false); // State to manage the visibility of the icons
    const [books, setBooks] = useState([]); // Initialize with an empty array
    const [sortOrder, setSortOrder] = useState('asc'); // State to manage the sorting order
    const [showEditModal, setShowEditModal] = useState(false); // State to manage the visibility of the edit modal

    useEffect(() => {
        console.log("customerBooks prop:", customerBooks); // Log the customerBooks prop
        setBooks(customerBooks); // Ensure books state is updated when customerBooks prop changes
    }, [customerBooks]);

    useEffect(() => {
        if (books.length > 0) {
            setBooks(sortBooks(books, sortOrder));
        }
    }, [sortOrder]);

    const sortBooks = (books, order) => {
        return [...books].sort((a, b) => {
            if (order === 'asc') {
                return a.rating - b.rating;
            } else {
                return b.rating - a.rating;
            }
        });
    };

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    const handleEditClick = () => {
        setShowEditModal(true);
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
                    onEditClick={handleEditClick} // Pass the handleEditClick function to BookList
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
            {showEditModal && 
                <EditModal 
                    onClose={() => setShowEditModal(false)} 
                />
            }
        </div>
    );
};

export default UserScreen;