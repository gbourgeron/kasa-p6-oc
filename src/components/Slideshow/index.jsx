import './index.scss';
import React, { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slideshow">
            {Array.isArray(images) && images.length > 1 && (
                <>
                    <img src={arrowLeft} alt="Précédent" onClick={goToPreviousSlide} className="prev-button" />
                    <img src={arrowRight} alt="Suivant" onClick={goToNextSlide} className="next-button" />
                </>
            )}
            <div className="slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            {Array.isArray(images) && images.length > 1 && (
                <div className="slide-counter">
                    {currentIndex + 1}/{images.length}
                </div>
            )}
        </div>
    );
};

export default Slideshow;
