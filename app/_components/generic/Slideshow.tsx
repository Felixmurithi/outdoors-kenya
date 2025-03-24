import React, { useState, useEffect } from 'react';

const Slideshow = () => {

    const slides = [
        { id: 1, image: 'image1.jpg', caption: 'Slide 1' },
        { id: 2, image: 'image2.jpg', caption: 'Slide 2' },
        { id: 3, image: 'image3.jpg', caption: 'Slide 3' },
    ];


    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="slideshow">
            <img src={slides[currentSlide].image} alt={slides[currentSlide].caption} />
            <p>{slides[currentSlide].caption}</p>
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Slideshow;