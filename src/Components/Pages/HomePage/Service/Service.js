import React from 'react';
import './Service.css'

const Service = ({ servece }) => {
    const { name, img, description } = servece;
    return (
        <div className="crad">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2> {name} </h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;