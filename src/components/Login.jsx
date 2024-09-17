import React from 'react';
const Login = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <label htmlFor="username">Email Id</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="submit" style={{ flexGrow: 1, marginRight: '10px' }}>Login</button>
                <button type="reset" style={{ flexGrow: 1 }}>Reset</button>
            </div>
            <p><span>Forgot Password</span></p>
            <p><span>Create Account</span></p>
        </div>
    );
}
export default Login;