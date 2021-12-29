import React, {useState, useEffect} from 'react';

import'../styles/BackToTop.css'

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    //TODO: REVIEW AND IMPROVE RESPONSIVENESS
    // If page position is more than 900px from origin, button is visible
    const toggleVisibility = () => {
        if(window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    // Define a scrolling function for the 'Back to Top' button
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    // On Effect, check position and toggle Visibility
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return() => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div 
                    onClick={scrollToTop} 
                    className="back-top-container">
                        Back To Top
                    </div>
            )}
        </div>
    )
}

export default BackToTop
