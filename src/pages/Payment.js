import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useNavigate, Link } from 'react-router-dom';

import { db } from '../utils/firebase';

import { setDoc, doc } from 'firebase/firestore';

import uuid from 'react-uuid';

import axios from '../utils/axios';

import { CardElement, 
        useStripe, 
        useElements 
    } from '@stripe/react-stripe-js';

// CurrencyFOrmat used again here, going to try to avoid it

import { getBasketTotal } from '../utils/BasketTotal';

import { clearBasket } from '../redux/actions';

import CheckoutProduct from '../components/CheckoutProduct';

import '../styles/Payment.css';


const Payment = () => {

    // Retreive global state objects
    const { basket, user } = useSelector(state => state.data);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const stripe = useStripe();

    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                // multiply subtotal by 100 to convert to cents from dollar amount
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
        setClientSecret(response.data.clientSecret)
        };
        if(getBasketTotal(basket) > 0) {
            getClientSecret();
        }
    }, [basket]);


    const setDocToDB = async (docData) => {
        
        // const docRef = doc(db, 'users', user && user.uid);

        const docRef = doc(db, 'users', user && user.uid, 'orders', uuid())

        const payload = {
                basket: basket,
                amount: docData.amount,
                created: docData.created,
        };

        // await addDoc(docRef, docData);

        await setDoc(docRef, payload)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            // db query to store order details into firebase db
            
            setDocToDB(paymentIntent);

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch(clearBasket())
            navigate('/orders');
        })
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }

    const value = getBasketTotal(basket)


    return (
        <div className='payment'>
            <div className="payment-container">
                <h1>
                    Checkout: 
                    {
                        <Link to='/checkout' >
                            {basket.length} items
                        </Link>
                    }
                </h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user && user.email}</p>
                        <p>24 Stavanger Drive</p>
                        <p>St. John's, NL A1A 5E8</p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment-items">
                        {basket && basket.map(item => (
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
                        )}
                    </div>
                </div>
                <div className="payment-section">
                    <div className="paymen-title spacer">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        <form
                            onSubmit={handleSubmit}
                            >
                                <CardElement 
                                    onChange={handleChange}
                                    />
                            <div className="payment-priceContainer">
                                <h3>Order Total: ${value}</h3>
                                <button
                                    disabled={processing || disabled || succeeded}
                                        >
                                    <span>
                                        {processing ? 
                                            'Processing' :
                                            'Buy Now'}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
