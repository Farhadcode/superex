import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PlaceOrder from '../../PlaceOrder/PlaceOrder';

const Booking = () => {
    const { serviceId } = useParams();
    console.log(serviceId);

    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://grim-vampire-55114.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div>
                <div>
                    <img src={service.img} alt="" /></div>
                <div>
                    <h2>{service.name}</h2>
                    <p>{service._id}</p>
                    <p>{service.description}</p>
                </div>
            </div>
            <div>
                <PlaceOrder></PlaceOrder>
            </div>
        </div>
    );
};

export default Booking;