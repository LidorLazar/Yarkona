import {FaWhatsapp} from 'react-icons/fa';
import Link from "next/link";


export default function Footer() {
    return (

        <footer dir={'rtl'} className={'w-full '}>
            <section className={'h-20 bg-blue-500 w-full text-white flex items-center justify-center gap-5'}>
                <p className={'flex items-center '}>
                    מצאתם באג? צלמו לנו !
                </p>
                <button>
                    <Link target={'_blank'} href={'https://wa.me/+972533585421?text= '}><FaWhatsapp size={20}/> </Link>
                </button>
            </section>
        </footer>
    )
}