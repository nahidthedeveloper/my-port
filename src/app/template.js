'use client'
import React, {useState, useContext, useEffect, useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {TransitionContext} from "@/context/TransitionProvider";
import Footer from "@/components/Footer";

gsap.registerPlugin(useGSAP);

export default function Template({children}) {
    const [isRendered, setIsRendered] = useState(false);
    const {timeline, setTimeline} = useContext(TransitionContext);
    const overlayRef = useRef();


    useEffect(() => {
        const ctx = gsap.context(() => {
            timeline
                .fromTo(overlayRef.current, {
                    scaleY: 0,
                    transformOrigin: 'bottom',
                }, {
                    scaleY: 1,
                    duration: 1,
                    ease: 'power2.inOut',
                })
                .to(overlayRef.current, {
                    scaleY: 0,
                    transformOrigin: 'top',
                    duration: 1,
                    ease: 'power2.inOut',
                }, '+=0.5')
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
                className='h-screen w-full fixed top-0 bg-primary'
                style={{zIndex: '10000'}}
                ref={overlayRef}
            />
            {isRendered && (
                <div>
                    {children}
                    <Footer/>
                </div>
            )}
        </div>
    );
}
