import { roboto400, roboto700 } from "@/styles/fonts/RobotoFonts";
import { ContainerContentProps } from "@/types/ContainerContentProps";
import Styles from "../Descriptions.module.scss";

const ContainerContent = ({ title, content }: ContainerContentProps) => {
  return (
    <div className={Styles["descriptions-container__service"]}>
      <div className={Styles["descriptions-container__service-title"]}>
        <h1 className={roboto700.className}>{title}</h1>
      </div>
      <div className={Styles["descriptions-container__service-content"]}>
        <h3 className={roboto400.className}>{content}</h3>
      </div>
    </div>
  );
};

export default ContainerContent;
