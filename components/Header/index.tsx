/* eslint-disable @next/next/no-img-element */
"use client";
import { roboto400 } from "@/styles/fonts/RobotoFonts";
import LanguageSelector from "../LanguageSelector";
import Styles from "./Header.module.scss";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const {t} = useTranslation();

  return (
    <div className={Styles["header-app"]}>
      <LanguageSelector />
      <div className={Styles["header-app__menu"]}>
        <h3 className={roboto400.className}>{t('loginButton')}</h3>
      </div>
    </div>
  );
};

export default Header;
