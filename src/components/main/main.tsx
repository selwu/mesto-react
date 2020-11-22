import React from 'react';
import './main.css';

interface MainType {
  onEditProfile: () => void;
  onAddPlace: () => void;
}

const Main = ({ onEditProfile, onAddPlace }: MainType) => {
  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" />
          <div className="user-info__data">
            <h1 className="user-info__name" />
            <p className="user-info__job" />
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
