import React from 'react';
import { useTranslation } from "react-i18next";

function navbar() {
  const [t, i18n] = useTranslation("global")
  return (
    <div>
        <h1>{t("navbar.home")}</h1>
        <h1>{t("navbar.work")}</h1>
        <h1>{t("navbar.about")}</h1>
        <div className='mb-5 space-x-5'>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        </div>
    </div>
  )
}

export default navbar