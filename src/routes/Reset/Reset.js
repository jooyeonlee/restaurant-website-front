import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, SendPasswordResetEmail } from "../../Firebase";
import "./Reset.css";


const Reset = () => {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            history.replace("/dashboard");
        }
    }, [user, loading]);

    return (
        <div>
            <div className="reset">
                <div className="resetContainer">
                    <input
                        type="text"
                        className="resetTextBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <button
                        className="resetbtn"
                        onClick={() => SendPasswordResetEmail(email)}
                    > Send password reset email
                    </button>
                    <div>
                        Don't have an account? <Link to="/register">Register</Link> now.
                    </div>
                </div>
            </div>           
        </div>
    );
}

export default Reset;
