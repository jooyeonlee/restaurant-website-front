import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../../Firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoute = ({ Component, ...rest }) => {

    const [user, loading, error] = useAuthState(auth);
    const [userState, setUserState] = useState(false);

    useEffect(() => {
        if(user) {
            setUserState(true);
        } else {
            setUserState(false);
        }
    }, [user]);

    console.log("user", user, userState)
  
    return (
    <Route
      {...rest}
      render={props =>
        userState ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;