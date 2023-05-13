import './PhotoCard.css'
import Photo from './Photo'
import CowDetails from './CowDetails';

interface Post {
  id: number;
  name: string;
  farmName: string;
  likes: number;
  display_src: string;
}

const PhotoCard = ({post}: {post: Post}) => {
  return (
    <div className="grid-photo__wrapper">
      <Photo displaySrc={post.display_src} name={post.name}/>
      <CowDetails likes={post.likes} name={post.name} farmName={post.farmName} />
    </div>
  )
}

export default PhotoCard;