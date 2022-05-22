import { useEffect } from 'react'
import { ComicInfo } from '../../contexts/ComicsContext'

import M from 'materialize-css/dist/js/materialize.min.js'

interface ModalDetailedComicProps {
    comic: ComicInfo | null
}

export function ModalDetailedComic({comic}: ModalDetailedComicProps) {

  useEffect(() => {
    var elems = document.querySelector('#modal-comic-info');
    M.Modal.init(elems);
  }, []);

  return (
    <div id="modal-comic-info" className="modal">
        <div className="modal-content">
            <h4>{comic?.title}</h4>
            <p>{comic?.description ? comic?.description : 'Comic without description'}</p>
        </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-black btn-flat">Close</a>
        </div>
    </div>
  )
}
