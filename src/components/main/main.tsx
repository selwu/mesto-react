import React, { useEffect, useState } from 'react';
import './main.css';
import { api } from '../../utils/api';

interface MainType {
  onEditProfile: () => void;
  onAddPlace: () => void;
}

const Main = ({ onEditProfile, onAddPlace }: MainType) => {
  const [userName, setUserName] = useState<string>('');
  const [userDescription, setUserDescription] = useState<string>('');
  const [userAvatar, setUserAvatar] = useState<string>('');
  const [cards, setCards] = useState<{}[]>([]);

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  const cardsElement = cards.map((item, index) => {
    return (
      <div key={index} className="place-card">
        <div
          className="place-card__image"
          style={{
            backgroundImage: `url(https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg)`,
          }}
        >
          <button className="place-card__delete-icon"></button>
        </div>
        <div className="place-card__description">
          <h3 className="place-card__name">Камчатка</h3>
          <div className="place-card__wrapper">
            <button className="place-card__like-icon"></button>
            <span className="place-card__like-count"></span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" style={{ backgroundImage: `url(${userAvatar})` }} />
          <div className="user-info__data">
            <h1 className="user-info__name">{userName}</h1>
            <p className="user-info__job">{userDescription}</p>
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
