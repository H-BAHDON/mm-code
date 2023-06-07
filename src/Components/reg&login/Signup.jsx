import React, {useState} from 'react';
import "./login.css"
export default function Signup({onSigninClick}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const handleSignup = (e) => {
        e.preventDefault();

        // Handle signup logic, e.g., perform validation or other client-side actions
        console.log('Signup form submitted:', {
            username,
            email,
            password,
            fullName
        });
    };

    return (
      <div className="box">
    <div className="form">
        <h2>SIGN UP</h2>
        <form onSubmit={handleSignup}>
            <div className="inputBox">
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <span>Full Name</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <span>Email</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <span>Password</span>
                <i></i>
            </div>
            <div className="links">
                <a href="#">Forgot password</a>
                <a href="#" onClick={onSigninClick}>
                    Sign in
                </a>
            </div>
            <input type="submit" value="Sign Up" />
        </form>
    </div>
</div>

    );
}
