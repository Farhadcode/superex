import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setService(data));

    }, [])
    return (
        <div>
            <h2 className="text-center"> All services</h2>
            <div className="service-container">
                {
                    service.map(service => <Service
                        servece={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;