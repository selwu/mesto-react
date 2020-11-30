import React from 'react';
import closeIcon from '../../images/close.svg';
import { Popup } from '../../types';

const PopupWithForm = ({ title, name, onClose, children, onSubmit }: Popup) => {
  return (
    <div className={`popup ${name}-popup`}>
      <div className="popup__content">
        <img onClick={onClose} src={closeIcon} alt="" className="popup__close" />
        <h3 className="popup__title">{title}</h3>
        <form onSubmit={onSubmit} className="popup__form form-card" name={name} noValidate>
          {children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
