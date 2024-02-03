import styles from "../style";
import { useTranslation } from "react-i18next";
//import { ale } from '../assets/images';

const Home = () => {
    const [t, i18n] = useTranslation("global");

    return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col pt-72 xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row text-[10px]">
                <h1>{t("home.Subtitle")}</h1>
            </div>
            <div className="">
                <h1>{t("home.TitleName")}</h1>
            </div>
        </div>
    </section>
    )
}
export default Home