'use client'
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarsStaggered, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useRef, useState} from "react";
import {usePathname} from "next/navigation";

const links = [
    {'name': 'Home', 'path': '/'},
    {'name': 'About', 'path': '/about'},
    {'name': 'Contact', 'path': '/contact'},
]

export default function Navbar() {
    gsap.registerPlugin(useGSAP);

    const pathname = usePathname()
    const sideMenu = useRef()
    const {contextSafe} = useGSAP();

    const tl = useRef()

    useGSAP(() => tl.current = gsap.timeline())

    const handleOpen = contextSafe(() => {
        tl.current.to(sideMenu.current, {
            right: 0
        })
            .from('#link',{

            })
    });

    const handleClose = contextSafe(() => {
        tl.current.to(sideMenu.current, {
            right: '-50%'
        });
    });

    return (
        <div>
            <div className='w-full bg-purple-800 flex justify-between items-center py-6 px-4 md:p-6 sticky top-0'>
                <Link href='/'>
                    <h2 className='uppercase text-2xl font-anton_regular text-white'>
                        Nahid Port.
                    </h2>
                </Link>
                <FontAwesomeIcon icon={faBarsStaggered}
                                 id='open'
                                 onClick={handleOpen}
                                 className='w-6 h-6 text-white font-bold cursor-pointer'/>
            </div>

            <div
                ref={sideMenu}
                className='flex flex-col gap-8 bg-[rgba(107,33,168,0.17)] backdrop-blur-2xl w-full h-screen md:w-1/3 px-24 pt-32 fixed top-0 -right-1/3'>
                {
                    links.map((link, index) =>
                        <Link href={link.path} key={index} onClick={handleClose} id='link'>
                            <h2 className={`uppercase text-xl ${pathname === link.path ? 'font-exo2_bold' : 'font-exo2_regular'} text-black hover:font-exo2_bold`}>
                                {link.name}
                            </h2>
                        </Link>
                    )
                }
                <FontAwesomeIcon icon={faCircleXmark}
                                 id='close'
                                 onClick={handleClose}
                                 className='w-8 h-8 text-white font-bold absolute top-6 right-6  cursor-pointer'/>
            </div>
        </div>
    )
}