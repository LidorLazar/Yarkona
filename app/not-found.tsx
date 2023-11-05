import Image from "next/image";
import referee from '../public/refree.png'
import Link from "next/link";


export default function NotFound() {
    return (
        <section dir={'rtl'} className={'flex h-full w-full justify-center items-center flex-col gap-2'}>
            <figure className={'w-1/3 h-full md:h-full md:w-80'}>
                <Image src={referee} alt={'referee-image'} title={'referee-image'}/>
            </figure>

            <article className={'font-bold w-full text-center'}>
                <p>
                    נכנסת לנבדל ! אנא נסה נתיב אחר
                </p>
                <div className={'flex h-full items-center justify-center'}>
                    <Link href={'/'} className={'bg-blue-500 rounded-xl text-white h-full py-2 px-3'}>אחורה לדף בית </Link>
                </div>
            </article>
        </section>
    )
}
