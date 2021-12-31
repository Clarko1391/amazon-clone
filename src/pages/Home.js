import React from 'react';

// Imports hard-coded header items and product data from utils
import { headerItems, products } from '../utils/ProductsData';

// Import Banner images from assets/bannerImages dir
import Banner1 from '../assets/bannerImages/Banner1.jpg';
import Banner2 from '../assets/bannerImages/Banner2.jpg';
import Banner3 from '../assets/bannerImages/Banner3.jpg';
import Banner4 from '../assets/bannerImages/Banner4.jpg';
import Banner5 from '../assets/bannerImages/Banner5.jpg';
import Banner6 from '../assets/bannerImages/Banner6.jpg';

import Slider    from '../components/Slider';
import Product   from '../components/Product';
import BackToTop from '../components/BackToTop';

import '../styles/Home.css';

const Home = () => {

    const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

    return (
        <div>
            {/* Dynamically renders text in sub-header element below header */}
            <div className="item-container">
                {headerItems && headerItems.map((item, index) => {
                    return <p>{item}</p>
                })}
            </div>
            <div className="home">
                <div className="home-container">
                    <Slider images={bannerImages} />
                    <div className="home-row">
                        {products.slice(0, 2).map(item => {
                            return(
                            <Product 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                specification={item.specification}
                                detail={item.detail}
                                />
                            )
                        }
                        )}
                    </div>
                    <div className="home-row">
                        {products.slice(2, 5).map(item => {
                            return(
                            <Product 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                specification={item.specification}
                                detail={item.detail}
                                />
                            )
                        }
                        )}
                    </div>
                    <div className="home-row">
                        {products.slice(5, 6).map(item => {
                            return(
                            <Product 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                specification={item.specification}
                                detail={item.detail}
                                />
                            )
                        }
                        )}
                    </div>
                    <div 
                        style={{
                            marginTop: '40px',
                            position: 'relative'
                        }}> 
                        <BackToTop />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home
