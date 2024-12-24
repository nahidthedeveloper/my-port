'use client'
import {useState} from "react"
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useTransitionContext} from "@/context/GlobalTransitionContextProvider";

gsap.registerPlugin(useGSAP);

export default function GlobalTransitionLayout({children}) {
    const [displayChildren, setDisplayChildren] = useState(children)
    const {timeline} = useTransitionContext();
    const {contextSafe} = useGSAP();

    const exit = contextSafe(() => {
        timeline?.play().then(() => {
            window.scrollTo(0, 0)
            setDisplayChildren(children);
            timeline.pause().clear();
        })
    })

    console.log(children.key)

    useGSAP(() => {
        // if (children.key !== displayChildren.key) {
        exit();
        // }

    }, [children])

    return (
        <div>
            {displayChildren}
        </div>
    )
}