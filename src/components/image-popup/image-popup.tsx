import React from 'react';
import closeIcon from '../../images/close.svg';

interface imagePopup {
  selectedCard: string | undefined;
}

const ImagePopup = ({ selectedCard }: imagePopup) => {
  return (
    <div className="popup image-popup">
      <div className="popup__container" style={{ position: 'relative' }}>
        <img src={selectedCard} alt="" className="popup__image" />
        <img src={closeIcon} alt="" className="popup__close" />
      </div>
    </div>
  );
};

export default ImagePopup;
