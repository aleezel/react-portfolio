import styles from "../style";
import { useTranslation } from "react-i18next";
import LookAt from "./LookAt";
//import { ale } from '../assets/images';

const Home = () => {
    const [t, i18n] = useTranslation("global");

    return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col pt-72 xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row text-[10px]">
                <h1>{t("home.Subtitle")}</h1>
            </div>
            <div className="flex flex-row justify-between items-center w-full mb-10 ">
                <h1>{t("home.TitleName")}</h1>
            </div>
            <div className="flex flex-col text-xl md:text-2xl mb-14 space-y-5 ss:w-[580px] sm:w-[680px] ">
                <p className="leading-normal">{t("home.Text1")} <span className="text-secondary font-semibold">{t("home.Highlight1")}</span></p> 
                <p className="leading-normal">{t("home.Text2")}</p>
            </div>
            <div className="">
                <LookAt />
            </div>
        </div>
        <div>
            <div className=""></div>
            <div className="absolute z-[-1] w-[40%] h-[35%] right-40 top-0 yellow__gradient"></div>

            
        </div>
    </section>
    )
}
export default Home