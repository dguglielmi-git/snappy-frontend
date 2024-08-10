"use client"
import { roboto400, roboto900 } from '@/styles/fonts/RobotoFonts';
import Image from 'next/image';
import Styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={Styles['footer']}>
      <div className={Styles['footer__container']}>
        <div className={Styles['footer__container-logo']}>
          <Image src='/logo_small.png' width={150} height={150} alt='Snappy Logo Picture' />
        </div>
        <div className={Styles['footer__container-contact']}>
          <h3 className={roboto900.className}>{t('footerGetInTouch')}</h3>
          <div>
            <span>
              <h4 className={roboto400.className}>
                <strong className={Styles['strong']}>{t('footerSupport')}</strong> support@snappy.com.ar
              </h4>
            </span>
            <span>
              <h4 className={roboto400.className}>
                <strong className={Styles['strong']}>{t('footerDevTeam')}</strong> dev@snappy.com.ar
              </h4>
            </span>
          </div>
        </div>
        <div className={Styles['footer__container-column']}>
          <div>
            <h3 className={roboto900.className}>{t('footerCompany')}</h3>
          </div>
          <div>
            <span>
              <h4 className={roboto400.className}>{t('footerAboutUs')}</h4>
            </span>
            <span>
              <h4 className={roboto400.className}>{t('footerOurValues')}</h4>
            </span>
          </div>
        </div>
        <div className={Styles['footer__container-column']}>
          <div>
            <h3>{t('footerResources')}</h3>
          </div>
          <div>
            <span>
              <h4 className={roboto400.className}>{t('footerFAQ')}</h4>
            </span>
            <span>
              <h4 className={roboto400.className}>{t('footerDocumentation')}</h4>
            </span>
          </div>
        </div>
      </div>
      <div className={Styles['footer__copyright']}>
        <span>Snappy © 2023 All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
