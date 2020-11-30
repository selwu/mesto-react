import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import PopupWithForm from '../popup-with-form/popup-with-form';
import { CurrentUserContext } from '../../contexts/current-user-context';

export interface EditProfileType {
  onClose: () => void;
}

const EditProfilePopup = ({ onClose }: EditProfileType) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const descriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);
  };

  const profilePopup = (
    <>
      <input
        onChange={nameHandler}
        value={name}
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
        onChange={descriptionHandler}
        value={description}
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

  useEffect(() => {
    if (currentUser === undefined) {
      return console.error('undefined in edit profile');
    }
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm onClose={onClose} title={'Редактировать профиль'} name={'profile'}>
      {profilePopup}
    </PopupWithForm>
  );
};

export default EditProfilePopup;
