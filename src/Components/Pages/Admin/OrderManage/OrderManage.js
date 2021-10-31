import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from "react-bootstrap";
const OrderManage = () => {
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])

    const AdminOrderDelete = (id) => {

        fetch(`http://localhost:5000/allOrders/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.deletedCount) {
                    alert('admin order delete ')
                    const remaining = allOrder.filter(order => order._id !== id);
                    setAllOrder(remaining);
                }
            })
    }
    return (
        <div>
            <h2 className="text-center mb-5"> All Order Management : {allOrder?.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>phone</th>
                        <th>Email</th>
                        {/* <th>Price</th>
                        <th>Address</th> */}
                        <th>Date</th>


                        <th>Action</th>
                    </tr>
                </thead>
                {allOrder?.map((order, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{order?.name}</td>
                            <td>{order?.phone}</td>
                            <td>{order?.email}</td>
                            {/* <td>{order?.Charge}</td>
                            <td>{order?.address}</td> */}
                            <td>{order?.date}</td>
                            <button className="btn bg-danger p-2" onClick={() => AdminOrderDelete(order?._id)} >Delete</button>
                        </tr >
                    </tbody >
                ))}
            </Table >
        </div>
    );
};

export default OrderManage;

// onClick={() => orderDelete(order?._id)}
///allOrders/:id