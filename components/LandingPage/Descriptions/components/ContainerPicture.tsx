import React from "react";
import Image from "next/image";
import { ContainerPictureProps } from "../../../../types/ContainerPictureProps";
import Styles from "../Descriptions.module.scss";

const ContainerPicture = ({
  image,
  title,
  width,
  height,
}: ContainerPictureProps) => {
  return (
    <div className={Styles["descriptions-container__picture"]}>
      <Image
        className={Styles["descriptions-container__picture-img"]}
        src={image}
        width={width}
        height={height}
        alt={title}
      />
    </div>
  );
};

export default ContainerPicture;
