import React, { useState } from 'react';

import './MyOrder.css'
import { useEffect } from 'react';
import useFirebase from '../../../../hooks/useFirebase';

const MyOrder = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);
    console.log(orders);

    return (
        <div>

            <h3> My Order : {orders.length}</h3>
        </div>
    );
};

export default MyOrder;