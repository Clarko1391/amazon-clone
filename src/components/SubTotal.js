import React from 'react';

import { useSelector } from 'react-redux';

// NOTE: removed usage of CurrencyFormat as it wasn't rendering properly
//       I don't see a need for it currently, leaving it in case its necessary later
// import CurrencyFormat from 'react-currency-format';

import { useNavigate } from 'react-router-dom';

import { getBasketTotal } from '../utils/BasketTotal';

import '../styles/SubTotal.css';

const SubTotal = () => {

    const navigate = useNavigate();

    const { basket, user } = useSelector(state => state.data);

    const handleCheckout = () => {
        if(user) {
            navigate('/payment');
        } else {
            navigate('/login');
        }
    }

    let value = getBasketTotal(basket);

    return (
        <div className='subtotal'>
            {/* <CurrencyFormat 
                renderText={(value) => {
                    <>
                        <p>
                            SubTotal ({basket.length} items) : <strong>{value}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                /> */}
            <p>
                SubTotal ({basket.length} items) : <strong>${value}</strong>
            </p>
            <small className='subtotal-gift'>
                <input type="checkbox" />
                This order contains a gift
            </small>
            <button
                onClick={handleCheckout}
                >
                Proceed to Checkout
            </button>
        </div>
    )
}

export default SubTotal
