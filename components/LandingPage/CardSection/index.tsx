import React from 'react';
import SnappyCard from './SnappyCard';
import { mdiHandshakeOutline, mdiCartVariant, mdiBasket, mdiFactory, mdiAccountGroup, mdiReceiptText } from '@mdi/js';
import { SnappyCardProps } from '@/types/SnappyCardProps';
import Styles from './CardSection.module.scss';
import Waves from '@/components/Waves';
import { useTranslation } from 'react-i18next';

const CardSection = () => {
  const { i18n } = useTranslation();

  const cards: SnappyCardProps[] = [
    {
      icon: mdiHandshakeOutline,
      iconTitle: 'Business',
      iconSize: 2,
      iconColor: '#c985f7',
      title: i18n.t('snappyCardBusinessTitle'),
      content: i18n.t('snappyCardBusinessContent'),
      learnmore: `#${i18n.t('snappyServiceDescriptionBranchOffices')}`,
    },
    {
      icon: mdiBasket,
      iconTitle: 'Product',
      iconSize: 2,
      iconColor: '#c985f7',
      title: i18n.t('snappyCardProductTitle'),
      content: i18n.t('snappyCardProductContent'),
      learnmore: `#${i18n.t('snappyServiceDescriptionProductManagement')}`,
    },
    {
      icon: mdiFactory,
      iconTitle: 'Material',
      iconSize: 2,
      iconColor: '#c985f7',
      title: i18n.t('snappyCardMaterialTitle'),
      content: i18n.t('snappyCardMaterialContent'),
      learnmore: `#${i18n.t('snappyServiceDescriptionMaterialManagement')}`,
    },
    {
      icon: mdiAccountGroup,
      iconTitle: 'Client',
      iconSize: 2,
      iconColor: '#c985f7',
      title: i18n.t('snappyCardClientTitle'),
      content: i18n.t('snappyCardClientContent'),
      learnmore: `#${i18n.t('snappyServiceDescriptionClientManagement')}`,
    },
    {
      icon: mdiReceiptText,
      iconTitle: 'Invoicing',
      iconSize: 2,
      iconColor: '#c985f7',
      title: i18n.t('snappyCardInvoicingTitle'),
      content: i18n.t('snappyCardInvoicingContent'),
      learnmore: `#${i18n.t('snappyServiceDescriptionInvoicing')}`,
    },
    {
      icon: mdiCartVariant,
      iconTitle: 'Sales',
      iconSize: 2,
      iconColor: '#c985f7',
      title: i18n.t('snappyCardSalesTitle'),
      content: i18n.t('snappyCardSalesContent'),
      learnmore: `#${i18n.t('snappyServiceDescriptionSales')}`,
    },
  ];

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
