import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, db, logout } from "../../Firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { SetMealSharp } from '@mui/icons-material';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const history = useHistory();

    console.log("dash", user)

    useEffect(() => {
        if(loading) {
            return;
        }
        if(!user) {
            return history.replace('/');
        }
    }, [user, loading]);

    return (
        <div className="dashboard">
            <div className="dashboardContainer">
                Logged in as
                <div>{user.displayName}</div>
                <div>{user.email}</div>
                <button className="dashboardbtn" onClick={logout}>Logout</button>
            </div>
        </div>           
    );
}

export default Dashboard;
