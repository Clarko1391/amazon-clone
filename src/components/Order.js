import React from 'react';

import moment from 'moment';

import CheckoutProduct from './CheckoutProduct';

import '../styles/Order.css';

const Order = ({ order }) => {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")}</p>
            <p className="order-id">
                <small>Order #: {order.id}</small>
            </p>
            {order.data.basket?.map(item => {
                return(
                    <CheckoutProduct
                        id={item.id}
                        uuid={item.uuid}
                        key={item.uuid}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                        hideButton
                        />
                )
            })}
            <h3 className='order-total'>
                Order Total: ${order.data.amount / 100}
            </h3>
        </div>
    )
}

export default Order
