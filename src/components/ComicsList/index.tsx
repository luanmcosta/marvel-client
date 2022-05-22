import { useState } from 'react'
import { ComicInfo } from '../../contexts/ComicsContext';
import { ComicCard } from '../ComicCard';
import { ModalDetailedComic } from '../ModalDetailedComic';

import M from 'materialize-css/dist/js/materialize.min.js'

interface ComicsListProps{
  items: Array<ComicInfo>;
}

export function ComicsList({items} : ComicsListProps ) {

  const [comicDetailed, setComicDetailed] = useState<ComicInfo | null>(null);

  function onCardShowInfo(comic: ComicInfo){
    setComicDetailed(comic);
    var modalElement = document.querySelector('#modal-comic-info');
    var instance = M.Modal.getInstance(modalElement);
    instance.open();
  }

  return (

    <>
      <ModalDetailedComic comic={comicDetailed}/>

      <div className='row flex'>
        {items.map((item, index) => {
          return (<ComicCard 
            key={index} 
            index={index} 
            comic={item}
            onShowInfo={onCardShowInfo} />)
          })}
      </div>
    </>
  )
}
