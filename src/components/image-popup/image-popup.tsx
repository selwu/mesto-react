import React, { Dispatch, SetStateAction } from 'react';
import closeIcon from '../../images/close.svg';

interface imagePopup {
  selectedCard: string | undefined;
  onClose: Dispatch<SetStateAction<string | undefined>>;
}

const ImagePopup = ({ selectedCard, onClose }: imagePopup) => {
  return (
    <div className="popup image-popup">
      <div className="popup__container" style={{ position: 'relative' }}>
        <img src={selectedCard} alt="" className="popup__image" />
        <img
          onClick={() => onClose(undefined)}
          src={closeIcon}
          alt="увеличенная картинка"
          className="popup__close"
        />
      </div>
    </div>
  );
};

export default ImagePopup;
