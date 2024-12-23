'use client'
import React, {useState, createContext, useContext} from "react"
import gsap from "gsap"

const TransitionContext = createContext({})

const useTransitionContext = () => useContext(TransitionContext)

const GlobalTransitionContextProvider = ({children}) => {
    const [timeline, setTimeline] = useState(() =>
        gsap.timeline({paused: true})
    )

    return (
        <TransitionContext.Provider
            value={{
                timeline,
                setTimeline,
            }}
        >
            {children}
        </TransitionContext.Provider>
    )
}

export {useTransitionContext, GlobalTransitionContextProvider}