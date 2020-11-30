import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../header/header';
import Main from '../main/main';
import PopupWithForm from '../popup-with-form/popup-with-form';
import ImagePopup from '../image-popup/image-popup';
import { api } from '../../utils/api';
import { CardObj, User } from '../../types';
import { CurrentUserContext } from '../../contexts/current-user-context';
import { CurrentCardContext } from '../../contexts/current-card-context';
import EditProfilePopup from '../edit-profile-popup/edit-profile-popup';

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState<boolean>(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<string | undefined>(undefined);
  const [currentUser, setCurrentUser] = useState<User>();
  const [currentCards, setCurrentCards] = useState<CardObj[]>();

  const cardPopup = (
    <>
      <input
        id="name-card"
        type="text"
        name="name"
        className="popup__input popup__input_type_name"
        required
        placeholder="Название"
        minLength={2}
        maxLength={30}
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

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = (link: string | undefined) => {
    setSelectedCard(link);
  };

  useEffect(() => {
    api.getUserInfo().then((info) => {
      setCurrentUser(info);
    });
    api.getInitialCards().then((data) => {
      console.log(data);
      setCurrentCards(data);
    });
  }, []);

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentCardContext.Provider value={currentCards}>
          <Header />
          <Main
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onCardClick={handleCardClick}
          />
          {isEditProfilePopupOpen && <EditProfilePopup onClose={handleEditProfileClick} />}
          {isAddPlacePopupOpen && (
            <PopupWithForm onClose={handleAddPlaceClick} title={'Новое место'} name={'card'}>
              {cardPopup}
            </PopupWithForm>
          )}
          {selectedCard && <ImagePopup onClose={setSelectedCard} selectedCard={selectedCard} />}
        </CurrentCardContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
