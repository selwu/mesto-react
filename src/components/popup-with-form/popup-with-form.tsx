import React from 'react';

interface Popup {
  title: string;
  name: string;
  children: JSX.Element;
}

const PopupWithForm = ({ title, name, children }: Popup) => {
  return (
    <div className={`popup ${name}-popup`}>
      <div className="popup__content">
        <img src="../../images/close.svg" alt="" className="popup__close popup__close-card" />
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form form-card" name={name} noValidate>
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
  );
};

export default PopupWithForm;
