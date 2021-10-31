import React from 'react';
import { Redirect, Route } from 'react-router';
//import useAuth from '../../../../hooks/useAuth';
import useFirebase from '../../../../hooks/useFirebase';


const PrivateRout = ({ children, ...rest }) => {
    const { user } = useFirebase();
    // const { user } = useAuth();
    console.log(user.email);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRout;