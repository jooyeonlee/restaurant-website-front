import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, SignInWithEmailAndPassword, SignInWithGoogle } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if(loading) {
            return;
        }
        if(user) {
            history.replace("/dashboard");
        }
    }, [user, loading]);

    return (
        <div className="login">
            <div className="loginContainer">
                <input
                    type="text"
                    className="loginTextBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="loginTextBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="loginbtn"
                    onClick={() => SignInWithEmailAndPassword(email, password)}
                >Sign-in
                </button>
                <button 
                    className="loginbtn loginGoogle"
                    onClick={SignInWithGoogle}
                >Sign-in with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;