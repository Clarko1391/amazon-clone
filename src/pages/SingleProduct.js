import React from 'react';

import { Link, useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addToBasket } from '../redux/actions';

import { products } from '../utils/ProductsData'

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import '../styles/SingleProduct.css';

const SingleProduct = () => {

    const dispatch = useDispatch();

    let { id } = useParams();

    let singleProduct = products.find(item => item.id === id)

    // NOTE: Tutorial restructured props into a new item, I can't see the reason why at this moment

    const handleAddItemToBasket = () => {
        dispatch(addToBasket(singleProduct));
    }

    return (
        <div className="single-product-container">
            <img 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349668_.jpg" 
                alt="amazon-ad" 
                className='single-product-ad'
            />
            <div>
                <div className="single-product">
                    <img 
                        className='single-product-image'
                        src={singleProduct.image} 
                        alt="product" 
                        />
                    <div className="single-product-info">
                        <div className="single-product-title">
                            {singleProduct.title}
                        </div>
                        <div className="single-product-rating">
                            {Array(singleProduct.rating).fill().map((_, index) => <p key={index}> ⭐ </p>)}
                        </div>
                        <p className="single-product-price">
                            Price: <strong>$</strong>
                            <strong>{singleProduct.price}</strong>
                        </p>
                        <div className="single-product-specification">
                            <h4>Specification</h4>
                            {singleProduct.specification && 
                            singleProduct.specification.map((item, index) => {
                                    return(
                                        <li key={index}>{item}</li>
                                    )
                            })}
                        </div>
                        <div className="single-product-description">
                            <h4>Product Description</h4>
                            <p>{singleProduct.detail}</p>
                        </div>
                        <button
                            onClick={handleAddItemToBasket}
                            className="single-product-button"
                            >
                                <i>
                                    <ShoppingCartOutlinedIcon />
                                </i>
                                Add to Basket
                        </button>
                            
                        <button 
                            className="single-product-button"
                            style={{
                                background: 'gray',
                                color: 'white'
                            }}
                            >
                                <Link
                                    className="single-product-back-link" 
                                    to='/' 
                                    >
                                    Back to Products
                                </Link>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
