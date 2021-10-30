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
                {/* {user?.email ?
                    <Link to="/home"> <Button onClick={handleLogout} className="main-btn rounded-pill"> Sign Out</Button></Link> :
                    <Link to="/login"> <Button className="main-btn rounded-pill">Sign Up Now</Button></Link>
                } */}


                <Link to="/login"><button className="rounded-pill" onClick={handleGoogleLogin}> Sign Up Now</button></Link>
            </div>
        </div>
    );
};

export default Login;