'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import {faEnvelope, faLocationDot, faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";

export default function Contact() {
    useEffect(() => {
        document.title = 'Nahid Port. | Contact'
    }, [])
    return (
        <div className="snap-start pt-[96px] mb-40 max-w-screen-xl w-full px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-14">
                <div>
                    <h1 className="text-5xl font-bold font-exo2_bold">Get in Touch</h1>
                    <p className="text-base mt-4 leading-relaxed font-exo2_regular">Have some big idea or brand to
                        develop and
                        need help? Then reach out We&apos;d love to hear about your project and provide help.</p>

                    <ul className="mt-12 space-y-6">
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className='h-4 w-4'/>
                            <h6 className="text-base ml-4 font-exo2_regular">
                                nahidthedeveloper@gmail.com
                            </h6>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faPhone} className='h-4 w-4'/>
                            <h6 className="text-base ml-4 font-exo2_regular">
                                +88 01750423751
                            </h6>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faLocationDot} className='h-4 w-4'/>
                            <h6 className="text-base ml-4 font-exo2_regular">
                                Rangpur 5680, Bangladesh.
                            </h6>
                        </li>
                    </ul>

                    <ul className="flex mt-12 space-x-4">
                        <li className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link href="">
                                <FontAwesomeIcon icon={faFacebookF} className='h-4 w-4 text-white'/>
                            </Link>
                        </li>
                        <li className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link href="">
                                <FontAwesomeIcon icon={faLinkedin} className='h-4 w-4 text-white'/>
                            </Link>
                        </li>
                        <li className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link href="">
                                <FontAwesomeIcon icon={faGithub} className='h-4 w-4 text-white'/>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-lg font-fira_regular shadow-xl">
                    <form className="mt-8 space-y-4">
                        <input type='text' placeholder='Name'
                               className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#178573]"/>
                        <input type='email' placeholder='Email'
                               className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#178573]"/>
                        <input type='text' placeholder='Subject'
                               className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#178573]"/>
                        <textarea placeholder='Message' rows="6"
                                  className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#178573]"></textarea>
                        <button type='button'
                                className="text-white bg-primary tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                            <FontAwesomeIcon icon={faPaperPlane} className='h-4 w-4 text-white mr-2'/>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}