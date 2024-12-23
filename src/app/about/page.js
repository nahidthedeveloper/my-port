'use client';

import {useEffect} from "react";

export default function About() {
    useEffect(() => {
        document.title = 'Nahid Port. | About'
    }, [])
    return (
        <div className="snap-start pt-[96px] mb-40 max-w-screen-xl w-full px-4 mx-auto">
            <div className="grid w-full gap-10 lg:grid-cols-2 font-exo2_regular">
                {/* Left Section */}
                <div className="flex flex-col items-center gap-10 lg:items-start">
                    <div className="flex flex-col w-full gap-8">
                        {/* Heading and Description */}
                        <div className="flex flex-col gap-4 items-center lg:items-start">
                            <h1 className="text-5xl font-bold font-exo2_bold">About Us</h1>
                            <p className="text-base text-gray-500 leading-relaxed text-center lg:text-start">
                                Our achievement story is a testament to teamwork and perseverance. Together, we&#39;ve
                                overcome challenges, celebrated victories, and created a narrative of progress and
                                success.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-col gap-6">
                            <div className="grid w-full gap-8 md:grid-cols-2">
                                <StatCard title="33+ Years" description="Influencing Digital Landscapes Together"/>
                                <StatCard title="125+ Projects" description="Excellence Achieved Through Success"/>
                            </div>
                            <div className="grid w-full gap-8 md:grid-cols-2">
                                <StatCard title="26+ Awards"
                                          description="Our Dedication to Innovation Wins Understanding"/>
                                <StatCard title="99% Happy Clients"
                                          description="Mirrors our Focus on Client Satisfaction."/>
                            </div>
                        </div>
                    </div>

                    {/* Read More Button */}
                    <button
                        className="flex items-center justify-center w-full px-3.5 py-2 text-sm font-medium leading-6 text-white bg-primary rounded-lg sm:w-fit group">
                        <span className="px-1.5">Read More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="white"/>
                        </svg>
                    </button>
                </div>


                <div className="h-[555px] w-[579px] rounded-3xl overflow-hidden">
                    <img
                        src="/images/me.png"
                        alt="Image"
                        className="object-cover object-center w-full h-full rounded-3xl"
                    />
                </div>

            </div>
        </div>
    );
}

function StatCard({title, description}) {
    return (
        <div
            className="flex flex-col w-full gap-2.5 p-3.5 border rounded-xl border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out">
            <h4 className="text-2xl font-bold text-gray-900 font-manrope leading-9">{title}</h4>
            <p className="text-base text-gray-500 leading-relaxed">{description}</p>
        </div>
    );
}
