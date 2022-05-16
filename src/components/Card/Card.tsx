import React from "react";
import "./card.scss";
import { CardProps } from "../../types/cardPropType";

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { name, imageUrl, type } = props;
  return (
    <div className="member-card-container">
      <div className="member-card">
        <img className="member-card-image" src={imageUrl} />
      </div>
      <div className="member-card-info">
        <p className="member-card-text">{name}</p>
        <p className="member-card-sub-text">{type}</p>
      </div>
    </div>
  );
};

export default Card;
