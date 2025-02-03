import React from 'react';
import './BookDetails.css';

const BookDetails = ({ book }) => {
    return (
        <div className="book-details">
            <p><span className="title-details">Author:</span> {book.bookAuthor.name}</p>
            <p><span className="title-details">Genre:</span> {book.bookGenre.title}</p>
            <p><span className="title-details">Notes:</span> {book.notes}</p>
        </div>
    );
};

export default BookDetails;