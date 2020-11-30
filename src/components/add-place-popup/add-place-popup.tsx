import React from 'react';
import { CurrentCardContext } from '../../contexts/current-card-context';
import PopupWithForm from '../popup-with-form/popup-with-form';
export interface AddCardType {
  onClose: () => void;
  // onUpdateUser: ({}: User) => void;
}

const AddPlacePopup = ({ onClose }: AddCardType) => {
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

  return (
    <PopupWithForm onSubmit={} onClose={onClose} title={'Новое место'} name={'card'}>
      {cardPopup}
    </PopupWithForm>
  );
};

export default AddPlacePopup;
