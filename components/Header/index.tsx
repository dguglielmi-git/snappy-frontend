/* eslint-disable @next/next/no-img-element */
"use client";
import { roboto400 } from "@/styles/fonts/RobotoFonts";
import LanguageSelector from "../LanguageSelector";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Styles["header-app"]}>
      <LanguageSelector />
      <div className={Styles["header-app__menu"]}>
        <h3 className={roboto400.className}>Log in</h3>
      </div>
    </div>
  );
};

export default Header;
