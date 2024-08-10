import { mdiHandshakeOutline, mdiCartVariant, mdiBasket, mdiFactory, mdiAccountGroup, mdiReceiptText } from '@mdi/js';
import { SnappyCardProps } from '@/types/SnappyCardProps';
import i18n from '@/locales/i18n';
export const cards: SnappyCardProps[] = [
  {
    icon: mdiHandshakeOutline,
    iconTitle: 'Business',
    iconSize: 2,
    iconColor: '#c985f7',
    title: i18n.t('snappyCardBusinessTitle'),
    content: i18n.t('snappyCardBusinessContent'),
    learnmore: '#Business & Branch Offices',
  },
  {
    icon: mdiBasket,
    iconTitle: 'Product',
    iconSize: 2,
    iconColor: '#c985f7',
    title: i18n.t('snappyCardProductTitle'),
    content: i18n.t('snappyCardProductContent'),
    learnmore: '#Product Management',
  },
  {
    icon: mdiFactory,
    iconTitle: 'Material',
    iconSize: 2,
    iconColor: '#c985f7',
    title: i18n.t('snappyCardMaterialTitle'),
    content: i18n.t('snappyCardMaterialContent'),
    learnmore: '#Material Management',
  },
  {
    icon: mdiAccountGroup,
    iconTitle: 'Client',
    iconSize: 2,
    iconColor: '#c985f7',
    title: i18n.t('snappyCardClientTitle'),
    content: i18n.t('snappyCardClientContent'),
    learnmore: '#Client Management',
  },
  {
    icon: mdiReceiptText,
    iconTitle: 'Invoicing',
    iconSize: 2,
    iconColor: '#c985f7',
    title: i18n.t('snappyCardInvoicingTitle'),
    content: i18n.t('snappyCardInvoicingContent'),
    learnmore: '#Invoicing & Tax Management',
  },
  {
    icon: mdiCartVariant,
    iconTitle: 'Sales',
    iconSize: 2,
    iconColor: '#c985f7',
    title: i18n.t('snappyCardSalesTitle'),
    content: i18n.t('snappyCardSalesContent'),
    learnmore: '#Sales, Purchases & Inventory Management',
  },
];
