import React from 'react'

import { useSelector } from 'react-redux';

import CheckoutProduct from '../components/CheckoutProduct';
import SubTotal        from '../components/SubTotal';

import '../styles/Checkout.css';

const Checkout = () => {

    const { basket, user } = useSelector(state => state.data)

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349668_.jpg"
                    alt="amazon-ad" 
                    className='checkout-ad'
                />
                <div>
                    <h3>Hello, {user?.email} </h3>
                    <h2 className="checkout-title">
                        {basket.length === 0 ? 
                            'Your Shopping Basket is empty' : 
                            'Your Shopping Basket'}
                    </h2>
                    {basket && basket.map(item => {
                        return(
                            <CheckoutProduct
                                id={item.id}
                                uuid={item.uuid}
                                key={item.uuid}
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                price={item.price}
                                />

                        )
                    })}
                </div>
            </div>
            <div className="checkout-right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
