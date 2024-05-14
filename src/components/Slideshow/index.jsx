import './index.scss';
import React, { useState } from 'react';

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
                    <button onClick={goToPreviousSlide} className="prev-button">
                        &lt;
                    </button>
                    <button onClick={goToNextSlide} className="next-button">
                        &gt;
                    </button>
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
