import React from 'react';

import './Photo.css'

const Photo = ({post}) => {
  return (
    <>
      <div className="grid-photo__wrapper">
        <img className="grid-photo" src={`${post.display_src}`} alt={`${post.name}`} />
      </div>
    </>
  )
}

export default Photo;