import React from 'react';
import { CardObj } from '../../types';

interface card {
  card: CardObj;
  onCardClick: (link: string | undefined) => void;
}

const Card = ({ card, onCardClick }: card) => {
  return (
    <div onClick={() => onCardClick(card.link)} className="place-card">
      <div
        className="place-card__image"
        style={{
          backgroundImage: `url(${card.link})`,
        }}
      >
        <button className="place-card__delete-icon"></button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{card.name}</h3>
        <div className="place-card__wrapper">
          <button className="place-card__like-icon"></button>
          <span className="place-card__like-count">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
