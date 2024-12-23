import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CircleText() {
    const imageRef = useRef(null);

    useEffect(() => {
        const container = document.querySelector('.snap-container');
        const section2 = document.querySelector('#section2');

        gsap.to(imageRef.current, {
            rotation: 360,
            scrollTrigger: {
                trigger: section2,
                scroller: container,
                start: 'top 60%',         // Animation starts when the top of the image reaches the center of the viewport
                end: 'top top',           // Animation ends when the bottom of the image reaches the top of the viewport
                scrub: 1,                    // Smooth linking of scroll progress with animation (1 for smooth)
                // markers: true
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="flex items-center justify-center absolute top-20 left-0">
            <img
                src="/images/circleTitle.svg"
                alt="circleTitle"
                className="w-[15vw] h-[15vw]"
                ref={imageRef}
            />
        </div>
    );
}
