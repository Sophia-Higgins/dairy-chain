import './Photo.css';

const Photo = ({displaySrc, name}: {displaySrc: string, name: string}) => {
  return (
    <img className="grid-photo" src={displaySrc} alt={name} />
  )
}

export default Photo;