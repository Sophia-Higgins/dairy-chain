import React from 'react';

import './PhotoCard.css'
import CowDetails from './CowDetails';

const PhotoCard = ({post}) => {
  return (
    <>
      <div className="grid-photo__wrapper">
        <img className="grid-photo" src={`${post.display_src}`} alt={`${post.name}`} />
        <CowDetails post={post} />
      </div>
    </>
  )
}

export default PhotoCard;