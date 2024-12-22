'use client'
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useRef} from "react";

export default function About() {
    const container = useRef(null);
    const tl = useRef(null);

    useGSAP(() => {
        tl.current = gsap.timeline()
            .to("#box", {
                rotate: 360
            })
            .to("#circle", {
                x: 100
            });
    }, {scope: container});

    return (
        <div className="app" ref={container}>
            <div id='box' className='w-52 h-52 bg-blue-900'></div>
            <div id='circle' className='w-52 h-52 bg-red-500 rounded-full'></div>
        </div>
    );
}