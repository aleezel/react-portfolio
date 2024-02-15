import { useState } from 'react';
import { closed, menu } from "../assets";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [t, i18n] = useTranslation("global");

  return (
    <nav className='fixed w-full flex py-10 navbar justify-end'>


        <ul className='list-none sm:flex flex-col hidden justify-end flex-1 space-y-4'>
          <li>
            <a className='navlink' href='#home'> {t("navbar.home")} </a>
          </li>
          <li>
            <a className='navlink' href='#work'> {t("navbar.work")} </a>
          </li>
          <li>
            <a className='navlink' href='#about'> {t("navbar.about")} </a>
          </li>
          <li >
            <a className='navlink' href='#contact'> {t("navbar.contact")} </a>
          </li>
          <div className='space-x-5 !mt-6'>
              <a className='cursor-pointer navlink' onClick={() => i18n.changeLanguage("en")}>EN</a>
              <a className='cursor-pointer navlink' onClick={() => i18n.changeLanguage("es")}>ES</a>
          </div>
        </ul>

        

      

      <div className='sm:hidden flex flex-1 justify-end items-center mr-10'>
        <div className='flex justify-center items-center w-[58px] h-[58px] bg-slate-200 rounded-full'>

          <img src={toggle ? closed : menu}
            alt="menu"
            className='w-[22px] h-[22px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-slate-200 absolute top-20 right-4 mx-4 my-2 min-w-[140px] rounded-xl sidebar flex-col`}>
              <ul className='list-none flex flex-col justify-end flex-1'>
                <li className='mb-3 navlink'>
                  <a href='#home'> {t("navbar.home")} </a>
                </li>
                <li className='mb-3 navlink'>
                  <a href='#work'> {t("navbar.work")} </a>
                </li>
                <li className='mb-3 navlink'>
                  <a href='#about'> {t("navbar.about")} </a>
                </li>
                <li className='mb-3 navlink'>
                  <a href='#contact'> {t("navbar.contact")} </a>
                </li>
              </ul>
              <div className='space-x-5'>
              <a className='cursor-pointer navlink' onClick={() => i18n.changeLanguage("en")}>EN</a>
              <a className='cursor-pointer navlink' onClick={() => i18n.changeLanguage("es")}>ES</a>
              
          </div>
            </div>
        </div>
      </div>

      
    </nav>
  )
}

export default Navbar