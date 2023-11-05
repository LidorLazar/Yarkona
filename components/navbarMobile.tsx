import {navLink} from './index'
import Link from "next/link";

export function NavbarMobile() {

    return (
        <section className={'h-full bg-[#1a5eaf] text-white text-center'} >
            <article>
                <ul>
                    {navLink.map(item => <li key={item.title}><Link href={item.href}>{item.title}</Link></li>)}
                </ul>
            </article>
        </section>
    )
}