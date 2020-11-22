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
          {children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
