import React, { ComicInfo, ComicsContext, ComicsContextType } from '../../contexts/ComicsContext'

import M from 'materialize-css/dist/js/materialize.min.js';
import { useContext, useEffect, useState } from 'react';
import ComicsList from '../ComicsList';
import { ModalDetailedComic } from '../ModalDetailedComic';

export function Main() {

    const {getComicsByType} = useContext(ComicsContext) as ComicsContextType;
    const [selectedComic, setSelectedComic] = useState<ComicInfo | null>(null);

    useEffect(() => {
        let el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {swipeable: true});
    });

    function handleShowInfo(comic: ComicInfo){
        setSelectedComic(comic);
    }

    return (
        <div id="catalog" className="row">

            <ModalDetailedComic selectedComic={selectedComic!} />

            <section className="col s12">
                <h4 className="white-text">Comics</h4>
                <ComicsList items={getComicsByType('Comic')} onShowInfo={handleShowInfo} />
            </section>
            
            <section className="col s12">
                <h4 className="white-text">Magazines</h4>
                <ComicsList items={getComicsByType('Magazine')} onShowInfo={handleShowInfo} />
            </section>

            <section className="col s12">
                <h4 className="white-text">Grapich Novel</h4>
                <ComicsList items={getComicsByType('Graphic Novel')} onShowInfo={handleShowInfo} />
            </section>

            <section className="col s12">
                <h4 className="white-text">Trade Paperback</h4>
                <ComicsList items={getComicsByType('Trade Paperback')} onShowInfo={handleShowInfo} />
            </section>
            
        </div>
    )
}

export default Main;