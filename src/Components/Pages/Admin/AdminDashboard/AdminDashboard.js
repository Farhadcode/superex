import React, { useState } from 'react';
import AddService from '../AddService/AddService';
import OrderManage from '../OrderManage/OrderManage';
import './AdminDashboard.css';


const AdminDashboard = () => {

    const [control, setControl] = useState()
    return (
        //<div> <h2> Admin Dashbord</h2></div>
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h6>Dashboard</h6>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("allOrder")}
                                        className="admin-menu p-2"
                                    >
                                        All Orders
                                    </li>
                                    <li
                                        onClick={() => setControl("addService")}
                                        className="admin-menu p-2"
                                    >
                                        Add Service
                                    </li>
                                    {/* <li
                                        onClick={() => setControl("allEvents")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Events
                                    </li> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {control === "allOrder" && <OrderManage></OrderManage>}
                            {control === "addService" && <AddService></AddService>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;