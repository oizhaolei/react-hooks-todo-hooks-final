export default {
    isAuthenticated: () => !!localStorage.getItem('token'),
    login: () => {
        const token = 'you can pass';
        localStorage.setItem('token', token);
    },
    logout: () => {
        localStorage.removeItem('token');
    }
};
