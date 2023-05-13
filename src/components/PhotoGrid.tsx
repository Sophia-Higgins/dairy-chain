import posts from '../data/posts'

import './PhotoGrid.css'
import PhotoCard from './PhotoCard';

const PhotoGrid = () => {
  return (
    <div className="photo-grid__wrapper">
      <div className="photo-grid">
        {posts.map((post, i) => {
          return <PhotoCard post={post} key={i} />
        })}
      </div>
    </div>
  )
}

export default PhotoGrid;