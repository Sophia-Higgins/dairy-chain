import React from 'react';

import posts from '../data/posts'

import './PhotoGrid.css'
import Photo from './Photo';

const PhotoGrid = () => {
  return (
    <div className="photo-grid__wrapper">
      <div className="photo-grid">
        {posts.map((post, i) => {
          return <Photo post={post} key={i} />
        })}
      </div>
    </div>
  )
}

export default PhotoGrid