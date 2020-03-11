
const Auth = {
    isAuthenticated: false,
    signin() {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
    },
    getAuth() {
        return this.isAuthenticated;
    }
};
export default Auth;