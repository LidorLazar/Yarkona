'use client'
import React, { useEffect, useState } from "react";


export default function Timer() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [logged, IsLogged] = useState(false);


    function calculateTimeLeft() {
        const now = new Date();
        const shabat = new Date();
        shabat.setHours(18, 0, 0, 0);

        if (now.getDay() === 6 && now.getHours() >= 18) {
            shabat.setDate(shabat.getDate() + 7);
        } else {
            while (shabat.getDay() !== 6) {
                shabat.setDate(shabat.getDate() + 1);
            }
        }

        const timeDiff = shabat.getTime() - now.getTime();
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    function checkTime() {
        const now = new Date();
        const isWednesday = now.getDay() === 6;
        const isRegisterTime = now.getHours() === 18 && now.getMinutes() >= 0 && now.getSeconds() >= 0;
        return isRegisterTime && isWednesday;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
            checkTime();
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const days = timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days;
    const hours = timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours;
    const minutes = timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes;
    const seconds = timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds;

    return (
        <section dir={'rtl'} className={'flex h-1/3 flex-col items-center justify-center text-center gap-3'}>
            <article>
                <p className={'text-[1.5em]'}>
                    ההרשמה נפתחת בעוד
                    <br />
                    {days} ימים {hours} שעות {minutes} דקות {seconds} שניות
                </p>
            </article>
            <div className={'flex justify-center w-full h-1/3 text-white text-2xl'}>
                <button disabled={!checkTime()} className={"bg-blue-500 rounded-xl w-1/2 h-full"}>
                    {' '}
                    מגיע{' '}
                </button>
            </div>
            <article dir={'rtl'}>
                <p dir={'rtl'}>
                    <span className={'text-blue-500 text-4xl'}>*</span>
                    שימו להם שאתה מחוברים בלי זה לא ניתן להירשם !!
                    <br/>
                </p>
                <p className={'underline'}>
                    הכפתור היה לחיץ רק כאשר אתם מחוברים והחל מ18:00
                </p>
            </article>
        </section>
    );
}
