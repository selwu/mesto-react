import React from 'react';
import './main.css';
import ImagePopup from '../image-popup/image-popup';
import PopupWithForm from '../popup-with-form/popup-with-form';

const Main = () => {
  const handleEditProfileClick = () => {
    const popup = document.querySelector('.profile-popup');
    popup!.classList.add('popup_is-opened');
  };

  const handleAddPlaceClick = () => {
    const popup = document.querySelector('.card-popup');
    popup!.classList.add('popup_is-opened');
  };

  const cardPopup = (
    <>
      <input
        id="name-card"
        type="text"
        name="name"
        className="popup__input popup__input_type_name"
        required
        placeholder="Название"
      />
      <span id="name-card-error" className="error" />
      <input
        id="url-card"
        type="url"
        name="link"
        className="popup__input popup__input_type_link-url"
        required
        placeholder="Ссылка на картинку"
      />
      <span id="url-card-error" className="error" />
      <button type="submit" className="button popup__button popup__button_card">
        +
      </button>
    </>
  );

  const profilePopup = (
    <>
      <input
        id="name-edit"
        type="text"
        name="nameEdit"
        className="popup__input popup__input_type_name"
        required
        placeholder="Имя"
      />
      <span id="name-edit-error" className="error" />
      <input
        id="job-edit"
        type="text"
        name="jobEdit"
        className="popup__input popup__input_type_link-url"
        required
        placeholder="О себе"
      />
      <span id="job-edit-error" className="error" />
      <button type="submit" className="button popup__button popup__button_edit popup__button_valid">
        Сохранить
      </button>
    </>
  );

  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" />
          <div className="user-info__data">
            <h1 className="user-info__name" />
            <p className="user-info__job" />
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
      <PopupWithForm title={'Редактировать профиль'} name={'profile'}>
        {profilePopup}
      </PopupWithForm>
      <PopupWithForm title={'Новое место'} name={'card'}>
        {cardPopup}
      </PopupWithForm>
      <ImagePopup />
    </>
  );
};

export default Main;
