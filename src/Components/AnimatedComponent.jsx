import React, { useEffect, useRef, useState } from 'react';

const AnimatedComponent = ({ children }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once the element is visible
                }
            },
            {
                threshold: 0.5
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`animate__animated ${isVisible ? 'animate__fadeInUp' : ''}`}
            style={{ opacity: isVisible ? 1 : 0 }} // Optional: Fade effect
        >
            {children}
        </div>
    );
};

export default AnimatedComponent;