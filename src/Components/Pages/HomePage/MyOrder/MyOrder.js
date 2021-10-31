import React, { useState } from 'react';
import { Table } from "react-bootstrap";
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
            <h1 className="text-center">All Orders {orders?.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>phone</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((order, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{order?.name}</td>
                            <td>{order?.phone}</td>
                            <td>{order?.email}</td>
                            <td>{order?.Charge}</td>
                            <td>{order?.address}</td>
                            <td>{order?.date}</td>
                            <button className="btn bg-danger p-2">Delete</button>
                        </tr >
                    </tbody >
                ))}
            </Table >
        </div >

    );
};

export default MyOrder;