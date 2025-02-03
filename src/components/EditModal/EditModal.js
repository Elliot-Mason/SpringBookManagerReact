import React, { useState, useEffect } from 'react';
import './EditModal.css';

const EditModal = ({ onClose, onSave, book }) => {
    const [notes, setNotes] = useState(book.notes || '');
    const [rating, setRating] = useState(book.rating || 0);

    useEffect(() => {
        setNotes(book.notes || '');
        setRating(book.rating || 0);
    }, [book]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Notes:", notes);
        console.log("Rating:", rating);
        onSave(notes, rating);
    };

    return (
        <div className="edit-modal">
            <div className="edit-modal-content">
                <h2>Edit Book</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="notes">Notes: </label>
                        <input
                            type="text"
                            id="notes"
                            name="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating: </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={rating}
                            min={1}
                            max={5}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>    
                    <button type="submit">Save</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EditModal;