
import Image from "next/image";
import {log} from "util";


async function getPlayerData() {
    const res:any = await fetch('https://vmfc.link/getAllSquadPlayers').then((data:any) => data.json())
    return res
}

export default async function PlayerCard() {
    const data = await getPlayerData()
    console.log(data)

    return (
        <section dir={'rtl'} className={'grid grid-cols-2 mb-20 gap-2 md:grid-cols-4 '}>
            {data.map((item: any) => {
                if (item.picture) {
                    return (
                        <div key={item.id}>
                            <div className={'relative '}>
                                <figure>
                                    <Image src={item.picture} alt={item.name} title={item.name} width={300} height={300}
                                           quality={100} className={'object-contain w-full'}/>
                                </figure>
                                <article className={'absolute bottom-0 h-1/5 flex items-center w-full justify-center' +
                                    ' text-xl bg-white bg-opacity-50  shadow-lg backdrop-filter backdrop-blur-md backdrop-contrast-125 backdrop-brightness-125'}>
                                    <p className={''}>{item.name}</p>
                                </article>
                            </div>
                        </div>
                    )
                }
            })}
        </section>
    )
}