import React, { useState } from 'react';
import { Table } from "react-bootstrap";
import './MyOrder.css'
import { useEffect } from 'react';
import useFirebase from '../../../../hooks/useFirebase';

const MyOrder = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://grim-vampire-55114.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);
    console.log(orders);


    const orderDelete = (id) => {

        fetch(`https://grim-vampire-55114.herokuapp.com/myOrders/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.deletedCount) {
                    alert(' order Cancel ')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }
    return (
        <div>
            <h1 className="text-center mb-5" > My All Orders : {orders?.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>phone</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Date</th>


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
                            <button className="btn bg-danger p-2" onClick={() => orderDelete(order?._id)}>Delete</button>
                        </tr >
                    </tbody >
                ))}
            </Table >
        </div >

    );
};

export default MyOrder;