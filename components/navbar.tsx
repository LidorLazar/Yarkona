'use client'

import Image from "next/image";
import logo from '../public/logo_yarkona.png'
import {useState} from "react";
import Link from "next/link";
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import {navLink} from './index'
import {NavbarMobile} from "@/components/navbarMobile";



export default function Navbar() {


    const [logged, setLogged] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const burgerOpen = <GiHamburgerMenu size={35} color={'black'} onClick={() => setIsOpen(true)}/>
    const burgerClose = <ImCross size={35} color={'black'} onClick={() => setIsOpen(false)}/>


    return (
        <header dir={'rtl'}
                className={'h-32 w-full bg-white shadow-navShadow p-0 m-0 text-lg font-bold z-10 relative '}>
            <nav className={'w-full h-full flex'}>

                <div className={'w-1/3 h-full flex justify-center items-center md:hidden'}>
                    <button>{isOpen ? burgerClose : burgerOpen}</button>

                </div>

                <div className={'w-1/3 h-full flex items-center justify-center'}>

                </div>

                <article className={'w-1/3 h-full md:block hidden'}>
                    <ul className={'w-full h-full flex justify-around items-center'}>
                        {navLink.map(item =>
                            <li key={item.title}><Link href={item.href}>{item.title}</Link></li>)}
                    </ul>

                </article>
                <figure className={'w-1/3 flex justify-center items-center'}>
                    <Image src={logo} alt={'logo-image'} title={'image-title'} className={'h-5/6 w-3/6 md:w-2/12'}/>
                </figure>
            </nav>
            {isOpen && <NavbarMobile/>}
        </header>

    )
}
