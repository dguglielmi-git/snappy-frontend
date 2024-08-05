import React from "react";
import ContainerPicture from "./ContainerPicture";
import ContainerContent from "./ContainerContent";
import { ContainerDescProps } from "@/types/ContainerDescProps";
import Styles from "../Descriptions.module.scss";

const ContainerDesc = (props: ContainerDescProps) => {
  return (
    <div
      key={props.description.id}
      className={Styles["descriptions-container"]}
      id={props.description.title}
    >
      {props.imageRight ? (
        <>
          <ContainerPicture
            image={props.description.image}
            title={props.description.title}
            width={350}
            height={350}
          />
          <ContainerContent
            title={props.description.title}
            content={props.description.content}
          />
        </>
      ) : (
        <>
          <ContainerContent
            title={props.description.title}
            content={props.description.content}
          />
          <ContainerPicture
            image={props.description.image}
            title={props.description.title}
            width={350}
            height={350}
          />
        </>
      )}
    </div>
  );
};
export default ContainerDesc;
