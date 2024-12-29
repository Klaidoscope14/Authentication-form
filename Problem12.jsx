import React, { useState } from 'react';
import './Problem12.css'; 

const Problem12 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState(false);
    const [logged, setLogged] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registered) {
            alert(`Registered Successfully with Email: ${email}`);
        } 
        
        else {
            setLogged(true);
        }
    };

    const handleLogout = () => {
        setLogged(false);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container">
            {
                logged ? (
                    <div className="welcome-box">
                        <h2>Welcome, {email}!</h2>
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="form-container">
                        <h1>{registered ? 'Register' : 'Login'}</h1>
                        <form onSubmit={handleSubmit} className="form-box">
                            <input 
                                type='email' 
                                placeholder='Enter email address' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input 
                                type='password' 
                                placeholder='Enter password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit" className="submit-btn">
                                {registered ? 'Register' : 'Login'}
                            </button>
                        </form>
                        <p className="toggle-text">
                            {registered ? "Already have an account? " : "Don't have an account? "}
                            <span className="toggle-link" onClick={() => setRegistered(!registered)}>
                                {registered ? 'Log in' : 'Register Now'}
                            </span>
                        </p>
                    </div>
                )
            }
        </div>
    );
}

export default Problem12;