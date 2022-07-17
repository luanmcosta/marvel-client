import React, { ComicInfo} from '../../contexts/ComicsContext';

import imgNotFound from './../../assets/img/img-not-found.jpg';

interface ComicCardProps {
  comic: ComicInfo;
  index: number;
  onShowInfo?: (comic: ComicInfo) => void
}

export function ComicCard({index, comic, onShowInfo}: ComicCardProps) {

  function getImage(){
    if(comic.thumbnail.path == 'http://x.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
      return imgNotFound
    return comic.thumbnail.path + '.' + comic.thumbnail.extension
  }

  function handleOnCardClick() {
    if(onShowInfo){
      onShowInfo(comic);
    }
  }

  return (
      <div>
        <div onClick={handleOnCardClick} className={"card " + (comic.selected ? 'comic-selected' : '')}>
          <div className="card-image">
            <img src={getImage()}/>
            <span className="card-title">{comic.title}</span>
          </div>
        </div>
      </div>
  )
}

export default ComicCard;
