import React from 'react';

const ImagePopup = () => {
  return (
    <div className="image-popup">
      <div className="popup__container" style={{ position: 'relative' }}>
        <img src="#" alt="" className="popup__image" />
        <img src="../../images/close.svg" alt="" className="popup__close popup__close-image" />
      </div>
    </div>
  );
};

export default ImagePopup;
