import React, { useState, useEffect } from 'react'

import '../styles/Slider.css';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon    from '@material-ui/icons/ArrowBackIos'


const Slider = ({images}) => {

    const [index, setIndex] = useState(0);

    // Sets last index position of available array images
    // Resets {index} if value moves outside (0 - lastIndex)
    //Runs each time a change occurs to {index} or {images} prop
    useEffect(() => {
        const lastIndex = images.length - 1;
        if(index < 0) {
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    }, [index, images])

    // Progresses slider forward once every 5s by incrementing {index}
    // Runs each time a change in state occurs to {index}
    useEffect(() => {
        let slider = setInterval(()=> {
            setIndex(index + 1);
        }, 5000);

        return () => {
            clearInterval(slider)
        }
    }, [index]);

    return (
        <div className='section'>
            <div className="section-center">
                {/* Maps supplied images prop to a banner in center of home section */}
                {images.map((image, indexImage) => {
                    let position = 'nextSlide';
                    if(indexImage === index) {
                        position = 'activeSlide'
                    }
                    if(indexImage === index - 1 || (index === 0 && indexImage === images.length - 1)) {
                        position = 'lastSlide';
                    }
                    return (
                        <article className={position} key={indexImage}>
                            <img 
                                src={image} 
                                alt="banner_img"
                                className='banner-img'
                                />
                        </article>
                    )
                })}
                {/* TODO: Replace with buttons */}
                <p 
                    className="prev"
                    onClick={()=> setIndex(index - 1)}>
                        <ArrowBackIosIcon />
                </p>
                <p 
                    className="next"
                    onClick={()=> setIndex(index + 1)}>
                        <ArrowForwardIosIcon />
                </p>
            </div>
        </div>
    )
}

export default Slider
