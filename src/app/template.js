'use client'
import React, { useState, useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionProvider";
import Footer from "@/components/Footer";

gsap.registerPlugin(useGSAP);

export default function Template({ children }) {
    const [isRendered, setIsRendered] = useState(false);
    const { timeline, setTimeline } = useContext(TransitionContext);
    const overlayRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            timeline
                .fromTo(overlayRef.current, {
                    scaleY: 0,
                    transformOrigin: 'bottom left',
                    rotation: 55,
                }, {
                    scaleY: 1,
                    rotation: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                })
                .to(overlayRef.current, {
                    scaleY: 0,
                    transformOrigin: 'top right',
                    rotation: 55,
                    duration: 1,
                    ease: 'power2.inOut',
                })
                .eventCallback('onComplete', () => {
                    setIsRendered(true);
                });

            timeline.play().then(() => {
                window.scrollTo(0, 0);
                timeline.pause().clear();
            });
        }, overlayRef);

        return () => ctx.revert();
    }, [children, timeline]);

    return (
        <div>
            <div
                className='h-[250vh] w-[200%] fixed bg-primary'
                style={{
                    zIndex: '10000',
                    left: '-50%',
                    top: '0%',
                    transformOrigin: 'bottom left',
                    transform: 'rotate(55deg)',
                }}
                ref={overlayRef}
            />
            {isRendered && (
                <div>
                    {children}
                    <Footer />
                </div>
            )}
        </div>
    );
}
