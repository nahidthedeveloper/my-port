'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../src/app/globals.css";

gsap.registerPlugin(ScrollTrigger);

export default function CircleText() {
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(imageRef.current, {
                rotation: 360,
                duration: 5,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top center",       // Start when the top of the element reaches the center of the viewport
                    end: "bottom top",         // End when the bottom of the element reaches the top of the viewport
                    scrub: true,               // Smoothly link the animation to scroll
                },
            });
        }, imageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="flex items-center justify-center absolute top-0 left-0">
            <img
                src="/images/circleTitle.svg"
                alt="circleTitle"
                className="w-[15vw] h-[15vw]"
                ref={imageRef}
            />
        </div>
    );
}
