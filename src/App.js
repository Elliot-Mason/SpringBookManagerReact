// Filename - App.js

import React from "react";
import NavBar from "./components/NavBar/NavBar"; // Navigation bar
import LoginModal from "./components/LoginModal/LoginModal"; // Login modal
import HomeScreen from "./components/HomeScreen/HomeScreen"; // Home screen
import UserScreen from "./components/UserScreen/UserScreen"; // User screen
import "./App.css";
import { handleLogin, handleLogout, handleCloseLoginModal } from "./eventHandlers";

class App extends React.Component {
    state = {
        customers: [], // List of customers
        selectedCustomer: null, // Store the selected customer
        customerBooks: [], // List of books for the selected customer
        allBooks: [], // List of all books
        showLoginModal: false, // Flag to show login modal
        token: null, // Store the authentication token
        loggedIn: false, // Flag to check if user is logged in
        topBook: {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "A novel set in the 1920s that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
            imageUrl: "" // Replace with actual image URL
        }
    };

    render() {
        const { showLoginModal, loggedIn, topBook, customerBooks } = this.state;
        return (
            <div>
                <NavBar 
                    onLoginClick={() => this.setState({ showLoginModal: true })} 
                    onLogoutClick={() => handleLogout(this.setState.bind(this))}
                    loggedIn={loggedIn}
                />
                {!loggedIn ? (<HomeScreen topBook={topBook} />) : (<UserScreen 
                    customerBooks={customerBooks}
                    token={this.state.token}
                    onEditClick={() => this.setState({ showEditModal: true })}
                />)}
                {showLoginModal && <LoginModal onClose={() => handleCloseLoginModal(this.setState.bind(this))} onLogin={(username, password) => handleLogin(username, password, this.setState.bind(this))} />}
            </div>
        );
    }
}

export default App;
