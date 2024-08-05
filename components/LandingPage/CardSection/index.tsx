import React from "react";
import SnappyCard from "./SnappyCard";
import { cards } from "./cardList";
import Styles from "./CardSection.module.scss";
import Waves from "@/components/Waves";

const CardSection = () => {
  return (
    <div>
      <Waves />
      <div className={Styles["cardsection-container"]}>
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
              <Waves backgroundColor='#e5e5e5' />
      </div>
    </div>
  );
};

export default CardSection;
