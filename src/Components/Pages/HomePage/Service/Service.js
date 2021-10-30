import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ servece }) => {
    const { name, img, description, _id } = servece;
    return (
        <div className="crad">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2> {name} </h2>
                <p>{description}</p>
                <Link to={`/booking/${_id}`}> <button>Booking</button></Link>
            </div>
        </div>
    );
};

export default Service;