import React, { useContext, useEffect, useState } from 'react';
import { ComicInfo, ComicsContext, ComicsContextType } from '../../contexts/ComicsContext';

import M from 'materialize-css/dist/js/materialize.min.js';

import imgNotFound from './../../assets/img/img-not-found.jpg';

interface ModalDetailedComicProps{
  selectedComic: ComicInfo;
}

export function ModalDetailedComic({selectedComic} : ModalDetailedComicProps) {

  const [image, setImage] = useState('');

  const {selectComic} = useContext(ComicsContext) as ComicsContextType;

  useEffect(() => {
    var elems = document.querySelector('#modal-comic-info');
    M.Modal.init(elems, {opacity: .8});
  }, []);

  useEffect(() => {
    if(selectedComic && selectedComic.thumbnail.path != 'http://x.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
      setImage(selectedComic.thumbnail.path + '.' + selectedComic.thumbnail.extension);
    else
      setImage(imgNotFound);
  }, [selectedComic])

  function handleComicSelection(){
    selectComic(selectedComic!.id);
  }

  return (
    <div id="modal-comic-info" className="modal modal-fixed-footer">
        <div className="modal-content">
       
          <div className="row">
            <div className="col s12 m4 l4">
              <img src={image} className={'modal-img ' + (selectedComic?.selected ? 'comic-selected' : '')}/>
            </div>
            <div className="col s12 l8">
              <h4>{selectedComic?.title}</h4>
              <p>Description: {selectedComic?.description ? selectedComic?.description : 'No description'}</p>
              
              <p>Resume: {selectedComic?.textObjects[0]?.text ? (<span dangerouslySetInnerHTML={{__html: selectedComic?.textObjects[0].text}}></span>) : 'No resume'}</p>
            </div>
          </div>

        </div>
            <div className="modal-footer">
            {selectedComic?.selected ? <a onClick={handleComicSelection} href="#!" className='btn-flat red white-text waves-ripple'><i className="material-icons">delete</i></a> : <a onClick={handleComicSelection} href="#!" className='btn-flat green white-text waves-ripple'> <i className="material-icons">add</i></a>}
            <a href="#!" className="btn-flat white modal-close waves-effect waves-black black-text">Close</a>
        </div>
    </div>
  )
}

export default ModalDetailedComic;