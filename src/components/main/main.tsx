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
  const [userAvatar, setUserAvatar] = useState<string>();

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);
  console.log('main');

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
      <div className="places-list root__section" />
    </>
  );
};

export default Main;
