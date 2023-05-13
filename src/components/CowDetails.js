import React, { useState } from 'react';

import CowIcon from '../icons/cow.png';

import './CowDetails.css'

const CowDetails = ({post}) => {
  const [numberOfLikes, setNumberOfLikes] = useState(post.likes);

  const handleOnClick = () => {
    setNumberOfLikes(numberOfLikes + 1);
  }

  return (
    <div className="cow-details__wrapper">
      <div>Name: {post.name}</div>
      <div>Farm: {post.farmName}</div>
      <>
        <button className="cow-details__button" onClick={handleOnClick} id="cow-details__button">
          <img className="cow-details__icon" src={CowIcon} alt="cow-icon" />
        </button>
        <div className="cow-details__likes">{numberOfLikes}</div>
      </>
    </div>
  )
}

export default CowDetails;