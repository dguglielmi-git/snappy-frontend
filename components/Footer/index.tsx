import { roboto400, roboto900 } from '@/styles/fonts/RobotoFonts';
import Image from 'next/image';
import Styles from './Footer.module.scss';
import Waves from '../Waves';

const Footer = () => {
  return (
    <div className={Styles['footer']}>
      <div className={Styles['footer__container']}>
        <div className={Styles['footer__container-logo']}>
          <Image src='/logo_small.png' width={150} height={150} alt='Snappy Logo Picture' />
        </div>
        <div className={Styles['footer__container-contact']}>
          <h3 className={roboto900.className}>GET IN TOUCH</h3>
          <div>
            <span>
              <h4 className={roboto400.className}>
                <strong className={Styles['strong']}>Support:</strong> support@snappy.com.ar
              </h4>
            </span>
            <span>
              <h4 className={roboto400.className}>
                <strong className={Styles['strong']}>Dev Team:</strong> dev@snappy.com.ar
              </h4>
            </span>
          </div>
        </div>
        <div className={Styles['footer__container-column']}>
          <div>
            <h3 className={roboto900.className}>COMPANY</h3>
          </div>
          <div>
            <span>
              <h4 className={roboto400.className}>About us</h4>
            </span>
            <span>
              <h4 className={roboto400.className}>Our Values</h4>
            </span>
          </div>
        </div>
        <div className={Styles['footer__container-column']}>
          <div>
            <h3>RESOURCES</h3>
          </div>
          <div>
            <span>
              <h4 className={roboto400.className}>FAQ</h4>
            </span>
            <span>
              <h4 className={roboto400.className}>Documentation</h4>
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
