import React from 'react';

import './PhotoCard.css'
import Photo from './Photo'
import CowDetails from './CowDetails';

const PhotoCard = ({post}) => {
  return (
    <div className="grid-photo__wrapper">
      <Photo displaySrc={post.display_src} name={post.name}/>
      <CowDetails likes={post.likes} name={post.name} farmName={post.farmName} />
    </div>
  )
}

export default PhotoCard;