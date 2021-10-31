import React from 'react';
import './Login.css'

import { Link } from 'react-router-dom';

// import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';




const Login = () => {

    const { handleGoogleLogin, user, handleLogout } = useFirebase();
    // const { handleGoogleLogin } = useAuth() || {};



    return (
        <div className="google-signUp">
            <div className="signUp-crad">
                {user?.email ?
                    <Link to="/home"> <button onClick={handleLogout} className=" rounded-pill"> Sign Out</button></Link> :
                    <Link to="/login"> <button onClick={handleGoogleLogin} className=" rounded-pill">Sign Up Now</button></Link>
                }


                {/* <Link to="/login"><button className="rounded-pill" onClick={handleGoogleLogin}> Sign Up Now</button></Link> */}
            </div>
        </div>
    );
};

export default Login;