import React from 'react';
import SnappyCard from './SnappyCard';
import { cards } from './cardList';
import Styles from './CardSection.module.scss';
import Waves from '@/components/Waves';

const CardSection = () => {
  return (
    <section className={Styles['cardsection-container']}>
      <Waves />
      <div className={Styles['cardsection-container__cards']}>
        {cards.map((card, index) => (
          <SnappyCard
            key={index}
            icon={card.icon}
            iconTitle={card.iconTitle}
            iconSize={card.iconSize}
            iconColor={card.iconColor || undefined}
            title={card.title}
            content={card.content}
            learnmore={card.learnmore}
          />
        ))}
        <article className={Styles['cardsection-container__waves']}>
          <Waves backgroundColor='#e5e5e5' />
        </article>
      </div>
    </section>
  );
};

export default CardSection;
