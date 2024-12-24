'use client'
import React, {createContext, useContext, useEffect} from "react";

const WheelContext = createContext(null);

const useWheel = () => useContext(WheelContext);

const MouseWheelContext = ({children}) => {
    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();

            const scrollContainer = document.querySelector("body");
            if (scrollContainer) {
                const scrollAmount = e.deltaY < 0 ? -100 : 100;

                scrollContainer.scrollBy({
                    top: scrollAmount,
                    behavior: "smooth",
                });
            }
        };

        window.addEventListener("wheel", handleWheel, {passive: false});

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <WheelContext.Provider value={{}}>
            {children}
        </WheelContext.Provider>
    );
};
export {MouseWheelContext, useWheel}