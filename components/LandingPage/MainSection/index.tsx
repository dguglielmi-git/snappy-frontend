import { roboto500 } from '@/styles/fonts/RobotoFonts';
import Image from 'next/image';
import Styles from './MainSection.module.scss';

const MainSection = () => {
  return (
    <section className={Styles['mainsection-container']}>
      <div className={Styles['mainsection-container__signup']}>
        <span>
          <h1 className={roboto500.className}>Join the Snappy Community</h1>
        </span>

        <span>
          <h2 className={roboto500.className}>your gateway to Business Success...</h2>
        </span>
        <div className={Styles['mainsection-container__signup-text']}>
          <span>
            <h3 className={roboto500.className}>Empower Your Business with Snappy</h3>
          </span>
          <span>
            <h4 className={roboto500.className}>Streamlined Control for Smart Entrepreneurs</h4>
          </span>
        </div>
        <div className={Styles['mainsection-container__signup-signup']}>
          <div className={Styles['mainsection-container__signup-signup-button']}>
            <h3 className={roboto500.className}>Sign Up!</h3>
          </div>
        </div>
      </div>
      <div className={Styles['mainsection-container__logo']}>
        <Image src='/logo.png' width={750} height={650} alt='Snappy Logo Picture' />
      </div>
    </section>
  );
};

export default MainSection;
