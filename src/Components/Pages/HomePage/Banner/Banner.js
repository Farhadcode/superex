import React from 'react';
import './Banner.css'
import bannerImg from '../../../../image/Banner/banner1.png'
import Login from '../../../../Login/Login/Login';



const Banner = () => {
    return (
        <div className="banner" >
            <div >
                <img src={bannerImg} class="card-img-top" alt="..." />

            </div>
            <div>
                <Login></Login>
            </div>

        </div>
    );
};

export default Banner;