import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../header/header';
import Main from '../main/main';
import PopupWithForm from '../popup-with-form/popup-with-form';
import ImagePopup from '../image-popup/image-popup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState<boolean>(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState<boolean>(false);

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

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  useEffect(() => {
    console.log('render well');
  });

  return (
    <div className="root">
      <Header />
      <Main onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick} />
      {isEditProfilePopupOpen && (
        <PopupWithForm
          onClose={handleEditProfileClick}
          title={'Редактировать профиль'}
          name={'profile'}
        >
          {profilePopup}
        </PopupWithForm>
      )}
      {isAddPlacePopupOpen && (
        <PopupWithForm onClose={handleAddPlaceClick} title={'Новое место'} name={'card'}>
          {cardPopup}
        </PopupWithForm>
      )}
      <ImagePopup />
    </div>
  );
}

export default App;
