
const Auth = {
    isAuthenticated: true,
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