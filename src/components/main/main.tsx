import React, { useContext } from 'react';
import './main.css';
import Card from '../card/card';
import { CurrentUserContext } from '../../contexts/current-user-context';

import { MainType } from '../../types';
import { CurrentCardContext } from '../../contexts/current-card-context';

const Main = ({ onEditProfile, onAddPlace, onCardClick }: MainType) => {
  const userContext = useContext(CurrentUserContext);
  const cardContext = useContext(CurrentCardContext);
  if (cardContext === undefined) {
    return null;
  }
  if (userContext === undefined) {
    return null;
  }
  const cardsElement = cardContext.map((card, index) => {
    return <Card card={card} key={index} onCardClick={onCardClick} />;
  });

  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div
            className="user-info__photo"
            style={{ backgroundImage: `url(${userContext.avatar})` }}
          />
          <div className="user-info__data">
            <h1 className="user-info__name">{userContext.name}</h1>
            <p className="user-info__job">{userContext.about}</p>
            <button onClick={onEditProfile} className="user-info__edit">
              Edit
            </button>
          </div>
          <button onClick={onAddPlace} className="button user-info__button">
            +
          </button>
        </div>
      </div>
      <div className="places-list root__section">{cardsElement}</div>
    </>
  );
};

export default Main;
