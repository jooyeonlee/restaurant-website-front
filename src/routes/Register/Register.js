import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from 'react-router-dom';
import { auth, RegisterWithEmailAndPassword, SignInWithGoogle } from "../../Firebase";
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    const register = () => {
        if (!name) {
            alert("Please enter name");
        }
        RegisterWithEmailAndPassword(name, email, password);
    }

    useEffect(()=>{
        if(loading){
            return;
        }
        if(user){
            history.replace("/dashboard");
        }
    }, [user, loading]);
    
    return(
        <div className="register">
            <div className="registerContainer">
                <input
                    type="text"
                    className="registerTextBox"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className="registerTextBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="text"
                    className="registerTextBox"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="registerbtn" onClick={register}>Register</button>
                <button className="registerbtn registerGoogle" onClick={SignInWithGoogle}>Register with Google</button>
                <div>Already have an account? <Link to='/login'>Login</Link> now.</div>
            </div>
        </div>
    );
}

export default Register;
