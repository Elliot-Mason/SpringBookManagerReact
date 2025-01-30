import React from 'react';
import './HomeScreen.css';

const HomeScreen = ({ topBook }) => {
    return (
    <div className="home-screen">
        <div className="top-book-section">
            <h2>Top book this week</h2>
            <div className="top-book-content">
                {topBook.imageUrl ? (
                    <img src={topBook.imageUrl} alt={topBook.title} className="top-book-image" />
                ) : (
                    <div className="top-book-placeholder"></div>
                )}
                <div className="top-book-details">
                    <h3>{topBook.title}</h3>
                    <p>Author: {topBook.author}</p>
                    <p>Description: {topBook.description}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default HomeScreen;