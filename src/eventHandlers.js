import axios from "axios";

export const fetchUserBooks = (username, setState, token) => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    axios
        .get(`http://localhost:8081/springProject/userbooks/byUsername/${username}`, { headers })
        .then((response) => {
            console.log("Fetched user books:", response.data); // Log the fetched user books
            setState({ customerBooks: response.data });
        })
        .catch((error) => {
            console.error("Error fetching user books:", error); // Log the error
        });
};

export const handleLogin = (username, password, setState) => {
    const token = btoa(`${username}:${password}`); // Encode credentials in Base64
    console.log("Logging in with:", { username, password }); // Log the credentials being sent

    axios.post("http://localhost:8081/springProject/auth/login", {}, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${token}` // Include the encoded credentials in the Authorization header
        }
    })
    .then((response) => {
        console.log("Login response:", response.data); // Log the response from the server
        const token = response.data; // Extract token from the response 
        setState({ token, showLoginModal: false, loggedIn: true }, () => {
            fetchUserBooks(username, setState, token); // Fetch user books immediately after login
        });
    })
    .catch((error) => {
        console.error("Error logging in:", error); // Log any errors
    });
};

export const handleSave = (id, notes, rating, token) => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const updatedBook = { id, notes, rating }; // Create an object with the updated book information
    return axios
        .put(`http://localhost:8081/springProject/userbooks/update`, updatedBook, { headers })
        .then(response => {
            console.log("Updated book", response.data); // Log the response
            return response.data;
        })
        .catch(error => {
            console.error("Error updating book:", error); // Log the error
            throw error;
        });
};

export const handleLogout = (setState) => {
    setState({
        token: null,
        loggedIn: false,
        customerBooks: [], // Clear customer books on logout
    });
};

export const handleCloseLoginModal = (setState) => {
    setState({ showLoginModal: false });
};

export const handleEditBook = (book, token, setState) => {
}

export const handleDeleteBook = (id, token) => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return axios
        .delete(`http://localhost:8081/springProject/userbooks/${id}`, { headers })
        .then((response) => {
            console.log("Deleted book", response.data); // Log the response
            return response.data;
        })
        .catch((error) => {
            console.error("Error deleting book:", error); // Log the error
            throw error;
        });
};
