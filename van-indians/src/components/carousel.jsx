import React, { useState, useEffect } from 'react';

function useIsMobile(breakpoint = 600) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, [breakpoint]);
    return isMobile;
}


const Carousel = () => {
    const isMobile = useIsMobile();
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    const images = [
        { src: isMobile ? "vi-logo-cropped.jpg" : "vi-logo-cropped.jpg", alt: "Slide 1" },
        { src: "img-18.JPG", alt: "Slide 2" },
        { src: "img-15.JPG", alt: "Slide 3" },
        { src: "img-11.JPG", alt: "Slide 4" },
    ];


    return (
        <div className="flex justify-center mt-6">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-xl shadow-md">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 aspect-square sm:aspect-video"
                        >
                            <img
                                key={index}
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                    <button onClick={handlePrev} className="btn btn-circle">❮</button>
                    <button onClick={handleNext} className="btn btn-circle">❯</button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
