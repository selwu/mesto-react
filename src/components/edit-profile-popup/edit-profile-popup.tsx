import React from 'react';
import PopupWithForm from '../popup-with-form/popup-with-form';

export interface EditProfileType {
  onClose: () => void;
}

const EditProfilePopup = ({ onClose }: EditProfileType) => {
  const profilePopup = (
    <>
      <input
        id="name-edit"
        type="text"
        name="nameEdit"
        className="popup__input popup__input_type_name"
        required
        placeholder="Имя"
        minLength={2}
        maxLength={30}
      />
      <span id="name-edit-error" className="error" />
      <input
        id="job-edit"
        type="text"
        name="jobEdit"
        className="popup__input popup__input_type_link-url"
        required
        placeholder="О себе"
        minLength={2}
        maxLength={30}
      />
      <span id="job-edit-error" className="error" />
      <button type="submit" className="button popup__button popup__button_edit popup__button_valid">
        Сохранить
      </button>
    </>
  );

  return (
    <PopupWithForm onClose={onClose} title={'Редактировать профиль'} name={'profile'}>
      {profilePopup}
    </PopupWithForm>
  );
};

export default EditProfilePopup;
