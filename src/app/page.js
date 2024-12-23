'use client'
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {useEffect} from "react";

const TitleScroll = dynamic(() => import("../../components/TitleScroll"), {ssr: false});
const CircleText = dynamic(() => import("../../components/CircleText"), {ssr: false});

export default function Home() {
    useEffect(() => {
        document.title = 'Nahid Port. | Home'
    }, [])

    return (
        <div>
            <section id='section1'
                className="snap-start pt-[96px] max-w-screen-xl w-full lg:min-h-screen px-4 m-auto flex flex-col lg:flex-row justify-between">
                <div className="text-center lg:text-left">
                    <h1 className="text-[8vw] md:text-[6vw] lg:text-[5vw] font-exo2_bold mt-16 lg:mt-32 leading-[1]">
                        Hi, my <br/> <span className="whitespace-nowrap">name is Nahid.</span>
                    </h1>

                    <h6 className="text-[3vw] md:text-[1.5vw] lg:text-[1vw] font-fira_regular mt-4">
                        A passionate full stack web developer from Bangladesh.
                    </h6>
                    <div className='my-16 lg:mt-36'>
                        <Link href={'/contact'}
                              className="px-8 py-3 text-[4vw] md:text-[2vw] lg:text-[1.2vw] bg-primary text-white rounded-full font-fira_regular">
                            Get in touch
                        </Link>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
                    <div className="relative w-full md:w-[50vw] lg:w-[40vw]">
                        <Image
                            src="images/men.svg"
                            alt="Image"
                            width="900"
                            height="900"
                            priority
                            className="w-[80vw] lg:w-[50vw] lg:absolute lg:left-0 lg:top-0"
                        />
                    </div>
                </div>
            </section>
            <section id='section2'
                className="snap-start min-h-screen w-full flex justify-center items-center relative overflow-x-hidden bg-men bg-cover bg-center bg-no-repeat"
            >
                <CircleText/>
                <TitleScroll/>
            </section>
        </div>
    );
}
