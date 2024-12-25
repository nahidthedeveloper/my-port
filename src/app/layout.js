import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";
import React from "react";
import CursorProvider from "@/providers/CursorProvider";
import {TransitionProvider} from "@/context/TransitionProvider";
import TransitionLayout from "@/layout/TransitionLayout";

const FiraCodeRegular = localFont({
    src: "./fonts/FiraCode-Regular.ttf",
    variable: "--font-firacode-regular",
});
const FiraCodeBold = localFont({
    src: "./fonts/FiraCode-Bold.ttf",
    variable: "--font-firacode-bold",
});
const Exo2Regular = localFont({
    src: "./fonts/Exo2-Regular.ttf",
    variable: "--font-exo2-regular",
});
const Exo2Bold = localFont({
    src: "./fonts/Exo2-Bold.ttf",
    variable: "--font-exo2-bold",
});
const AntonRegular = localFont({
    src: "./fonts/Anton-Regular.ttf",
    variable: "--font-anton-regular",
});

export const metadata = {
    title: "Nahid Portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${FiraCodeRegular.variable} ${FiraCodeBold.variable} ${Exo2Regular.variable} ${Exo2Bold.variable} ${AntonRegular.variable} bg-[#f5eee5] w-full`}>
        <ReactLenis options={{duration: 2}} root>
            <TransitionProvider>
                <TransitionLayout>
                    <div className={'overflow-x-hidden'}>
                        <CursorProvider/>
                        <Navbar/>
                        {children}
                        <Footer/>
                    </div>
                </TransitionLayout>
            </TransitionProvider>
        </ReactLenis>
        </body>
        </html>
    )
        ;
}
