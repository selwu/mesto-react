import React from 'react';
import './main.css';
import ImagePopup from '../image-popup/image-popup';

const Main = () => {
  const handleEditProfileClick = () => {
    const popup = document.querySelector('.profile-popup');
    popup!.classList.add('popup_is-opened');
  };

  const handleAddPlaceClick = () => {
    const popup = document.querySelector('.card-popup');
    popup!.classList.add('popup_is-opened');
  };

  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo"></div>
          <div className="user-info__data">
            <h1 className="user-info__name"></h1>
            <p className="user-info__job"></p>
            <button onClick={handleEditProfileClick} className="user-info__edit">
              Edit
            </button>
          </div>
          <button onClick={handleAddPlaceClick} className="button user-info__button">
            +
          </button>
        </div>
      </div>
      <div className="places-list root__section" />
      <div className="popup card-popup">
        <div className="popup__content">
          <img src="../../images/close.svg" alt="" className="popup__close popup__close-card" />
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form form-card" name="new" noValidate>
            <input
              id="name-card"
              type="text"
              name="name"
              className="popup__input popup__input_type_name"
              required
              placeholder="Название"
            />
            <span id="name-card-error" className="error"></span>
            <input
              id="url-card"
              type="url"
              name="link"
              className="popup__input popup__input_type_link-url"
              required
              placeholder="Ссылка на картинку"
            />
            <span id="url-card-error" className="error"></span>
            <button type="submit" className="button popup__button popup__button_card">
              +
            </button>
          </form>
        </div>
      </div>
      <div className="popup profile-popup">
        <div className="popup__content">
          <img src="../../images/close.svg" alt="" className="popup__close popup__close-profile" />
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form form-profile" name="edit" noValidate>
            <input
              id="name-edit"
              type="text"
              name="nameEdit"
              className="popup__input popup__input_type_name"
              required
              placeholder="Имя"
            />
            <span id="name-edit-error" className="error"></span>
            <input
              id="job-edit"
              type="text"
              name="jobEdit"
              className="popup__input popup__input_type_link-url"
              required
              placeholder="О себе"
            />
            <span id="job-edit-error" className="error"></span>
            <button
              type="submit"
              className="button popup__button popup__button_edit popup__button_valid"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <ImagePopup />
    </>
  );
};

export default Main;
