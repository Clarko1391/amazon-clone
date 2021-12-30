import React from 'react'

import { useDispatch } from 'react-redux';

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import '../styles/CheckoutProduct.css';
import { removeFromBasket } from '../redux/actions';

const CheckoutProduct = ({ uuid, id, title, image, rating, price }) => {

    const dispatch = useDispatch();

    const handleRemoveItemFromBasket = () => {
        dispatch(removeFromBasket(uuid))
    }

    return (
        <div className='checkout-product' >
            <img
                className='checkout-product-image'
                src={image} 
                alt="product" 
                />
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {Array(rating).fill().map((_, index) => <p key={index}> ⭐ </p>)}
                </div>
                <button
                    onClick={handleRemoveItemFromBasket}
                >
                    <i>
                        <ShoppingCartOutlinedIcon />
                        Remove from Basket
                    </i>
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
