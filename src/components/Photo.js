import React from 'react';

import './Photo.css';

const Photo = ({displaySrc, name}) => {
  return (
    <img className="grid-photo" src={displaySrc} alt={name} />
  )
}

export default Photo;