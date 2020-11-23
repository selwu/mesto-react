import React, { useEffect, useState } from 'react';
import './main.css';
import { api } from '../../utils/api';
import Card from '../card/card';

interface MainType {
  onEditProfile: () => void;
  onAddPlace: () => void;
  onCardClick: (link: string | undefined) => void;
}

export interface DataObj {
  name: string;
  likes: { about: string; avatar: string; cohort: string; name: string; _id: string }[];
  link: string;
}

const Main = ({ onEditProfile, onAddPlace, onCardClick }: MainType) => {
  const [userName, setUserName] = useState<string>('');
  const [userDescription, setUserDescription] = useState<string>('');
  const [userAvatar, setUserAvatar] = useState<string>('');
  const [cards, setCards] = useState<DataObj[]>([]);

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
    api.getInitialCards().then((data) => {
      setCards(data);
      console.log(data);
    });
  }, []);

  const cardsElement = cards.map((card, index) => {
    return <Card card={card} key={index} onCardClick={onCardClick} />;
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
