import styles from '../style';
import { arrowdown } from "../assets";
import { useTranslation } from "react-i18next";

const LookAt = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <a  href='#works' className='flex flex-row items-baseline space-x-10 cursor-pointer'>
      <p className={`${styles.primarylink} text-3xl sm:text-4xl`}>{t("home.Link")}</p>
      <img src={arrowdown} alt="Flecha hacia abajo" className='w-[14px] object-contain' />
    </a>
  )
}

export default LookAt