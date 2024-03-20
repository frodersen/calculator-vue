export function isLoginSuccessful(response) {
    // Adjust this based on how your backend indicates a successful login
    return response && response.status === 200 && response.data && response.data.token;
}

export function storeToken(token) {
    localStorage.setItem('authToken', token);
}

export function getToken() {
    return localStorage.getItem('authToken');
}
