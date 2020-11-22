import React from 'react';
import closeIcon from '../../images/close.svg';

interface Popup {
  title: string;
  name: string;
  onClose: any;
  children: JSX.Element;
}

const PopupWithForm = ({ title, name, onClose, children }: Popup) => {
  return (
    <div className={`popup ${name}-popup`}>
      <div className="popup__content">
        <img onClick={onClose} src={closeIcon} alt="" className="popup__close popup__close-card" />
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form form-card" name={name} noValidate>
          {children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
