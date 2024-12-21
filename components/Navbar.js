'use client'
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useRef,} from "react";
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
            .from('#link', {})
    });

    const handleClose = contextSafe(() => {
        tl.current.to(sideMenu.current, {
            right: '-65%'
        });
    });

    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-[1216px] w-full flex justify-between items-center px-4 py-6 sticky top-0'>
                <Link href='/'>
                    <h2 className='uppercase text-4xl font-anton_regular text-orange-500'>
                        Nahid Port.
                    </h2>
                </Link>
                <div
                    onClick={handleOpen}
                    className="flex flex-col justify-between w-14 h-12 bg-orange-500 p-3 rounded-xl">
                    <div className="w-full h-1 bg-white rounded"></div>
                    <div className="w-full h-1 bg-white rounded"></div>
                    <div className="w-full h-1 bg-white rounded"></div>
                </div>

            </div>

            <div
                ref={sideMenu}
                className='flex flex-col gap-8 bg-[rgba(249,115,22,0.17)] backdrop-blur-2xl w-2/3 h-screen md:w-1/3 px-24 pt-32 fixed top-0 -right-2/3 md:-right-1/3'>
                {
                    links.map((link, index) =>
                        <Link href={link.path} key={index} onClick={handleClose} id='link'>
                            <h2 className={`uppercase text-xl ${pathname === link.path ? 'font-exo2_bold' : 'font-exo2_regular'} text-black hover:font-exo2_bold`}>
                                {link.name}
                            </h2>
                        </Link>
                    )
                }
                <CloseIcon
                    onClick={handleClose}
                    className='w-12 h-12 text-white absolute top-6 right-6 bg-orange-500 p-2 rounded-xl'/>
            </div>
        </div>
    )
}