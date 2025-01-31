import React from 'react';
import './EditModal.css';

const EditModal = ({ onClose }) => {
    return (
        <div className="edit-modal">
            <div className="edit-modal-content">
                <h2>Edit Book</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EditModal;