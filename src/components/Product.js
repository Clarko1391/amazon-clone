import React from 'react';

import { Link } from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { useDispatch } from 'react-redux';

import uuid from 'react-uuid'

import { addToBasket } from '../redux/actions';

import '../styles/Product.css';


const Product = ({ id, title, image, price, rating, specification, detail }) => {

    const dispatch = useDispatch();

    const handleAddItemToBasket = () => {

        const item = {
            id,
            uuid: uuid(),
            title,
            image,
            price,
            rating,
            specification,
            detail
        }

        dispatch(addToBasket(item));

    }

    return (
        <div className='product'>
            <div className="info">
                <Link to={`/product/${id}`}>
                    <p>{title}</p>
                </Link>
                <p className="price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="rating">
                    {Array(rating).fill().map((_, index) => <p key={index}> ⭐ </p>)}
                </div>
            </div>
            <img src={image} alt="" />
            <button
                onClick={handleAddItemToBasket}
                >
                <i>
                    <ShoppingCartOutlinedIcon />
                </i>
                Add to Basket
            </button>
        </div>
    )
}

export default Product
