import React, { useEffect, useState } from 'react';

import { db } from '../utils/firebase';

import { useSelector } from 'react-redux';

import Order from '../components/Order';

import '../styles/Orders.css';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

const Orders = () => {

    const { user } = useSelector(state => state.data);

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        if(user) 
        {
            onSnapshot(collection(db, 'users', user && user.uid, 'orders'), snapshot => {
                    setOrders(
                        snapshot.docs.map(doc => {
                            return({
                                id: doc.id,
                                data: doc.data(),
                            })
                        }))
            });
        } else {
            setOrders([]);
        }
    }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className="orders-order">
                {orders && orders.map((order, index) => {
                    return(
                        <Order 
                            order={order} 
                            key={index} 
                            />
                    )
                })}
            </div>
        </div>
    )
}

export default Orders
