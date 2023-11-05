import termsImage from '../../public/termsImage.png'
import Image from "next/image";

export default function Terms() {
    return (
        <section dir={'rtl'} className={'h-full w-full flex flex-col items-center gap-3 mb-20'}>
            <figure className={'flex w-full justify-center md:w-1/3'}>
                <Image src={termsImage} alt={'termsImage'} title={'termsImage'} className={'w-1/3'}/>
            </figure>

            <article className={'px-10 text-center'}>
                <p>
                    הרשמה: שבת 18:00
                    <br/>
                    עזרה ראשונה + דפיברילטור בארון כדורים
                    <br/>
                    משחק: יום שני 19:30 חימום | 20:00 שריקה
                    <br/>
                    8 דקות משחק עד 2 שערים אם קבוצה מובילה, שהזמן עובר 8:00 כל חוץ מסיים משחק (לא כולל עבירה). אם נמשך
                    המשחק וקבוצה מובילה אחרי 10 דקות, כל כדור חוץ מסיים (לא כולל עבירה) תוצאת תיקו - 2 דקות תוספת זמן
                    (גול זהב).
                    <br/>
                    2 פנדלים לקבוצה, ותיקה יוצאת
                    <br/>
                    חופשיות - 5 צעדים מרחק
                </p>
                <br/>
                <hr/>
                <br/>
                <p>
                    ביטול עד יום ראשון ב 12:00
                    <br/>
                    ביטול אחרי ראשון ב 12:00 גורר 20 שניות איחור בהרשמה של שבוע הבא
                    <br/>
                    כמובן שביטול סמוך למשחק יטופל פרטנית עם ההנהלה
                    מי שירצה להתלונן על הליך ההרשמה רק עם הקלטת מסך.
                </p>
            </article>

        </section>
    )
}