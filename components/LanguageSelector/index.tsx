import { roboto400 } from "@/styles/fonts/RobotoFonts";
import { ES, GB } from "country-flag-icons/react/3x2";
import { useEffect, useState } from "react";
import Styles from "./LanguageSelector.module.scss";

const languages = [
  {
    flag: "GB",
    language: "English",
    component: (
      <GB
        title="English"
        className={Styles["languageselector-container__selected-flag"]}
      />
    ),
  },
  {
    flag: "ES",
    language: "Español",
    component: (
      <ES
        title="Español"
        className={Styles["languageselector-container__selected-flag"]}
      />
    ),
  },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("GB");
  const [selectedComponent, setSelectedComponent] =
    useState<JSX.Element | null>(null);
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(!showList);
    console.log(showList);
  };

  const handleSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setShowList(false);
  };

  useEffect(() => {
    const langSelect = languages.find((e) => e.flag === selectedLanguage);
    if (langSelect)
      setSelectedComponent(
        <>
          {langSelect.component}
          <h5 className={roboto400.className}>{langSelect.language}</h5>
        </>
      );
  }, [selectedLanguage]);

  return (
    <div className={Styles["languageselector-container"]}>
      <div
        className={Styles["languageselector-container__selected"]}
        onClick={handleClick}
      >
        {selectedComponent}
      </div>
      {showList && (
        <div
          className={Styles["languageselector-container__list"]}
          onMouseLeave={() => setShowList(false)}
        >
          <ul>
            {languages.map((lang, index) => (
              <li key={index}>
                <a href="#" onClick={() => handleSelect(lang.flag)}>
                  <span>
                    {lang.component} {lang.language}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
