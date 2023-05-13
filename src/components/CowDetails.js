import React, { useState } from 'react';

import CowIcon from '../icons/cow.png';

import './CowDetails.css'

const CowDetails = ({likes, name, farmName}) => {
  const [numberOfLikes, setNumberOfLikes] = useState(likes);

  const handleOnClick = () => {
    setNumberOfLikes(numberOfLikes + 1);
  }

  return (
    <div className="cow-details__wrapper">
      <div>Name: {name}</div>
      <div>Farm: {farmName}</div>
      <>
        <button className="cow-details__button" onClick={handleOnClick} data-testid="cow-details-button">
          <img className="cow-details__icon" src={CowIcon} alt="cow-icon" />
        </button>
        <div className="cow-details__likes" data-testid="cow-details-likes">{numberOfLikes}</div>
      </>
    </div>
  )
}

export default CowDetails;