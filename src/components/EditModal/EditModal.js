import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({ book, onClose, onSave }) => {
        const [rating, setRating] = useState(book.rating);
        const [notes, setNotes] = useState(book.notes);

        const handleSubmit = (e) => {
            e.preventDefault();
            onSave({ rating, notes });
        };

        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Edit Book</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="rating">Rating:</label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="notes">Notes:</label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit">Save</button>
                            <button type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
}

export default EditModal;