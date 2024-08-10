import React from 'react';
import ContainerDesc from './components/ContainerDesc';
import { isOdd } from '@/utils/util';
import i18n from '@/locales/i18n';

const descriptions = [
  {
    id: 1,
    title: i18n.t('snappyServiceDescriptionBranchOffices'),
    content: i18n.t('snappyServiceDescriptionBranchOfficesContent'),
    image: '/stores.jpg',
  },
  {
    id: 2,
    title: i18n.t('snappyServiceDescriptionProductManagement'),
    content: i18n.t('snappyServiceDescriptionProductManagementContent'),
    image: '/products.png',
  },
  {
    id: 3,
    title: i18n.t('snappyServiceDescriptionMaterialManagement'),
    content: i18n.t('snappyServiceDescriptionMaterialManagementContent'),
    image: '/material.png',
  },
  {
    id: 4,
    title: i18n.t('snappyServiceDescriptionClientManagement'),
    content: i18n.t('snappyServiceDescriptionClientManagementContent'),
    image: '/clients.png',
  },
  {
    id: 5,
    title: i18n.t('snappyServiceDescriptionInvoicing'),
    content: i18n.t('snappyServiceDescriptionInvoicingContent'),
    image: '/taxes.png',
  },
  {
    id: 6,
    title: i18n.t('snappyServiceDescriptionSales'),
    content: i18n.t('snappyServiceDescriptionSalesContent'),
    image: '/sales.png',
  },
];

const Descriptions = () => {
  return (
    <>
      {descriptions.map((description) =>
        isOdd(description.id) ? (
          <ContainerDesc description={description} imageRight={false} key={description.id} />
        ) : (
          <ContainerDesc description={description} imageRight={true} key={description.id} />
        )
      )}
    </>
  );
};

export default Descriptions;
