import { roboto400 } from "@/styles/fonts/RobotoFonts";
import { SnappyCardProps } from "@/types/SnappyCardProps";
import Icon from "@mdi/react";
import Link from "next/link";
import Styles from "./SnappyCard.module.scss";

const SnappyCard = (props: SnappyCardProps) => {
  return (
    <div className={Styles["snappycard-container"]}>
      <div className={Styles["snappycard-container__icon"]}>
        <Icon
          path={props.icon}
          title={props.iconTitle}
          size={props.iconSize || 2}
          color={props.iconColor || "#000000"}
        />
      </div>
      <div className={Styles["snappycard-container__title"]}>
        <h2 className={roboto400.className}>{props.title}</h2>
      </div>
      <div className={Styles["snappycard-container__content"]}>
        <h4 className={roboto400.className}>{props.content}</h4>
      </div>
      <div className={Styles["snappycard-container__learnmore"]}>
        <Link href={props.learnmore}>Learn more ➡ </Link>
      </div>
    </div>
  );
};

export default SnappyCard;
