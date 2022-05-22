import { useContext } from 'react'
import { ComicInfo, ComicsContext, ComicsContextType } from '../../contexts/ComicsContext';

import imgNotFound from './../../assets/img/img-not-found.jpg'

interface ComicCardProps {
  comic: ComicInfo;
  index: number;
  onShowInfo?: (comic: ComicInfo) => void
}

export function ComicCard({index, comic, onShowInfo}: ComicCardProps) {

  const {comics, selectComic} = useContext(ComicsContext) as ComicsContextType;

  function getImage(){
    if(comic.thumbnail.path == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
      return imgNotFound
    return comic.thumbnail.path + '.' + comic.thumbnail.extension
  }

  function handleSelection(){
    selectComic(comic.id);
  }

  function handleOnCardClick() {
    if(onShowInfo){
      onShowInfo(comic);
    }
  }

  function isSelected(){
    if(!comic.selected){
      return <a 
        onClick={handleSelection} 
        className="btn-small btn-floating halfway-fab waves-effect waves-light red-transparent">
          <i className="material-icons">add</i>
        </a>
    }
    return <a 
      onClick={handleSelection} 
      className="btn-small btn-floating halfway-fab waves-effect waves-light green">
        <i className="material-icons">done</i>
      </a>
  }

  return (
    <div className="flex-child col s6 m3 l2">
      <div className={"card "  + (comic.selected ? 'comic-selected' : '')} >
        <div className="card-image">
          <img src={getImage()} />
          <span className="card-title">{comic.title}</span>
            
            {isSelected()}
            
            <a className="btn-small btn-floating btn-info halfway-fab waves-effect waves-light black-transparent white-text"
              onClick={handleOnCardClick} >
                <i className="material-icons">visibility</i>
            </a>
        </div>
      </div>
    </div>
  )
}
