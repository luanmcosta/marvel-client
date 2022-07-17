import React, { useContext, useEffect, useState } from 'react';
import { ComicsContext, ComicsContextType } from '../../contexts/ComicsContext';

import M from 'materialize-css/dist/js/materialize.min.js';

import imgNotFound from './../../assets/img/img-not-found.jpg';

export function ModalDetailedComic() {

  const [image, setImage] = useState('');

  const {selectComic, detailedComic} = useContext(ComicsContext) as ComicsContextType;

  useEffect(() => {
    var elems = document.querySelector('#modal-comic-info');
    M.Modal.init(elems, {opacity: 0.7});
  }, []);

  useEffect(() => {
    if(detailedComic && detailedComic.thumbnail.path != 'http://x.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
      setImage(detailedComic.thumbnail.path + '.' + detailedComic.thumbnail.extension);
    else
      setImage(imgNotFound);
  }, [detailedComic])

  function handleComicSelection(){
    selectComic(detailedComic!.id);
    
  }

  return (
    <div id="modal-comic-info" className="modal">
        <div className="modal-content">
       
          <div className="row">
            <div className="col s12 m4 l4">
              <img src={image} className={'modal-img ' + (detailedComic?.selected ? 'comic-selected' : '')}/>
            </div>
            <div className="col s12 l8">
              <h4>{detailedComic?.title}</h4>
              <p>Description: {detailedComic?.description ? detailedComic?.description : 'No description'}</p>
              
              <p>Resume: {detailedComic?.textObjects[0]?.text ? (<span dangerouslySetInnerHTML={{__html: detailedComic?.textObjects[0].text}}></span>) : 'No resume'}</p>
            </div>
          </div>

        </div>
            <div className="modal-footer">
            {detailedComic?.selected ? <a onClick={handleComicSelection} href="#!" className='btn-flat red white-text waves-ripple'><i className="material-icons">delete</i></a> : <a onClick={handleComicSelection} href="#!" className='btn-flat green white-text waves-ripple'> <i className="material-icons">add</i></a>}
            <a href="#!" className="btn-flat white modal-close waves-effect waves-black black-text">Close</a>
        </div>
    </div>
  )
}
