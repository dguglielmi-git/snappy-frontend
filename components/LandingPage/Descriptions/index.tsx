import React from "react";
import ContainerDesc from "./components/ContainerDesc";
import { isOdd } from "@/utils/util";

const descriptions = [
  {
    id: 1,
    title: "Business & Branch Offices",
    content:
      "Our system offers comprehensive control over multiple businesses or branch offices, including earnings, losses, and product status. With our centralized platform, you can manage operations remotely and make informed decisions, all from one place. Experience unparalleled efficiency and ease-of-use with our powerful solution.",
    image: "/stores.jpg",
  },
  {
    id: 2,
    title: "Product Management",
    content:
      "This module provides complete control over product management, with detailed information such as name, barcode, prices (wholesale, retail, hotsale), supplier, . Users can set up alerts to be notified when a product is close to reaching minimum stock levels, and view maximum expected and current stock levels. With our flexible category system, users can easily categorize their products into custom categories, such as drinks, food, clothing, and more. Our intuitive interface makes it easy to manage and track product inventory, so users can stay on top of their stock levels and make informed decisions.",
    image: "/products.png",
  },
  {
    id: 3,
    title: "Material Management",
    content:
      "The Material Management module in Snappy provides a powerful solution for effectively managing materials used in the manufacturing process within your business. With this module, you gain complete control over your materials inventory, enabling you to optimize resource allocation, track quantities, and ensure accurate cost management.",
    image: "/material.png",
  },
  {
    id: 4,
    title: "Client Management",
    content:
      "The Client Management module in the system provides extensive capabilities to store and manage valuable information about clients. This empowers owners to gain deeper insights into their customers, enabling them to offer personalized and tailored services. By capturing and organizing comprehensive client data, including contact details, preferences, purchase history, and communication records, the system equips businesses with the tools to better understand their clients' needs and preferences. This knowledge facilitates targeted marketing efforts, efficient customer support, and the delivery of exceptional customer experiences. With the Client Management module, businesses can build stronger relationships with their clients, enhance customer satisfaction, and drive long-term loyalty.",
    image: "/clients.png",
  },
  {
    id: 5,
    title: "Invoicing & Tax Management",
    content:
      "The system offers a comprehensive Invoicing and Tax Management module, providing the store owner with complete control over generating invoices for their sales and effectively managing taxes. With this module, the owner can link each sale to an invoice and utilize the tax manager to specify applicable taxes and calculate the corresponding amounts to be included in the invoice. This functionality ensures accurate and streamlined invoicing processes, facilitates tax compliance, and empowers the owner to have full visibility and control over their financial transactions.",
    image: "/taxes.png",
  },
  {
    id: 6,
    title: "Sales, Purchases & Inventory Management",
    content:
      "Our system empowers users to manage sales, purchases, and inventory with ease, allowing them to stay on top of their operations and make informed decisions. With our sales control module, users can easily create invoices, view best-selling products, and track earnings for a specific period. Our purchases module provides a comprehensive solution for managing purchases and incrementing inventory, while our inventory control module detects when a product is running low and updates inventory levels in real-time. With our powerful and intuitive system, users can efficiently manage their operations and ensure that they always have the right products in stock.",
    image: "/sales.png",
  },
];

const Descriptions = () => {
  return (
    <>
      {descriptions.map((description) =>
        isOdd(description.id) ? (
          <ContainerDesc
            description={description}
            imageRight={false}
            key={description.id}
          />
        ) : (
            <ContainerDesc
            description={description}
            imageRight={true}
            key={description.id}
          />
        )
      )}
    </>
  );
};

export default Descriptions;
