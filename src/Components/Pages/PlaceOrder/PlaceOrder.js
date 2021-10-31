import React, { useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';
import './PlaceOrder.css'
import { useForm } from 'react-hook-form';

const PlaceOrder = () => {
    const { user } = useFirebase();
    //const [user, setUser] = useState(null);
    //console.log(user);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://grim-vampire-55114.herokuapp.com/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        //.then((result) => setUser(result));
        console.log(data);
    };
    return (
        <div>
            <h1 className="mt-5 text-center text-info">Place Order</h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName}
                                {...register("name", { required: true })} placeholder="name"
                                className="p-2 m-2 w-100" />
                            <br />
                            <input defaultValue={user.email}
                                {...register("email")} placeholder="your email"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input defaultValue=""
                                {...register("phone", { required: true })} placeholder="phon number"
                                className="p-2 m-2 w-100" />

                            <br />
                            <input
                                {...register("date")}
                                // placeholder="Name"
                                type="date"
                                className="p-2 m-2 w-100"
                            />

                            <br />

                            <select {...register("Charge")} className="p-2 m-2 w-100">
                                <option value="50">Dhaka</option>
                                <option value="80">Chattogram</option>
                                <option value="100">Other</option>

                            </select>

                            <br />
                            <input defaultValue="" {...register("address")} placeholder="address" className="p-2 m-2 w-100" />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;