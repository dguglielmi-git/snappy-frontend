import { mdiHandshakeOutline, mdiCartVariant, mdiBasket, mdiFactory, mdiAccountGroup, mdiReceiptText } from "@mdi/js";
import { SnappyCardProps } from "@/types/SnappyCardProps";

export const cards: SnappyCardProps[] = [
    {
        icon: mdiHandshakeOutline,
        iconTitle: "Business",
        iconSize: 2,
        iconColor: "#c985f7",
        title: "Branch Offices",
        content:
            "Effortlessly control multiple businesses. Experience unparalleled efficiency.",
        learnmore: "#Business & Branch Offices",
    },
    {
        icon: mdiBasket,
        iconTitle: "Product",
        iconSize: 2,
        iconColor: "#c985f7",
        title: "Product Management",
        content:
            "Complete product control: detailed info, alerts, categories.",
        learnmore: "#Product Management",
    },
    {
        icon: mdiFactory,
        iconTitle: "Material",
        iconSize: 2,
        iconColor: "#c985f7",
        title: "Material Management",
        content:
            "User-controlled material management system for effective control.",
        learnmore: "#Material Management",
    },
    {
        icon: mdiAccountGroup,
        iconTitle: "Client",
        iconSize: 2,
        iconColor: "#c985f7",
        title: "Client Management",
        content:
            "Robust client management for efficient system operation.",
        learnmore: "#Client Management",
    },
    {
        icon: mdiReceiptText,
        iconTitle: "Invoicing",
        iconSize: 2,
        iconColor: "#c985f7",
        title: "Invoicing & Taxes",
        content:
            "Invoice and tax management for seamless sales/purchases.",
        learnmore: "#Invoicing & Tax Management",
    },
    {
        icon: mdiCartVariant,
        iconTitle: "Sales",
        iconSize: 2,
        iconColor: "#c985f7",
        title: "Sales & Inventory",
        content:
            "Streamlined operations: sales, purchases, and inventory.",
        learnmore: "#Sales, Purchases & Inventory Management",
    },
];