import React, { ComicsContext, ComicsContextType } from '../../contexts/ComicsContext'

import M from 'materialize-css/dist/js/materialize.min.js';
import { useContext, useEffect } from 'react';
import ComicsList from '../ComicsList';

export function Main() {

    const {isListLoaded, getComicsByType} = useContext(ComicsContext) as ComicsContextType;

    useEffect(() => {
        let el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {swipeable: true});
    });

    function ListComic() {
        return <ComicsList items={getComicsByType('Comic')} />;
    }

    function ListMagazines() {
        return <ComicsList items={getComicsByType('Magazine')} />;
    }

    function ListGraphic() {
        return <ComicsList items={getComicsByType('Graphic Novel')} />
    }

    function ListPaper() {
        return <ComicsList items={getComicsByType('Trade Paperback')} />
    }

    return (
        <div id="catalog" className="row">
            <section className="col s12">
                <h4 className="white-text">Comics</h4>
                <ListComic />
            </section>
            
            <section className="col s12">
                <h4 className="white-text">Magazines</h4>
                <ListMagazines />
            </section>

            <section className="col s12">
                <h4 className="white-text">Grapich Novel</h4>
                <ListGraphic />
            </section>

            <section className="col s12">
                <h4 className="white-text">Trade Paperback</h4>
                <ListPaper />
            </section>
            
        </div>
    )
}
