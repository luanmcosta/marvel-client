import { ComicsContext, ComicsContextType } from '../../contexts/ComicsContext'

import M from 'materialize-css/dist/js/materialize.min.js'
import { useContext, useEffect } from 'react'
import { ComicsList } from '../ComicsList';

export default function Main() {

    const {isListLoaded, getComicsByType} = useContext(ComicsContext) as ComicsContextType;

    useEffect(() => {
        let el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {swipeable: true});
    });

    return (
        <div id="catalog" className="row">
            <section className="col s12">
                <h4 className="white-text">Comics</h4>
                {isListLoaded ? (<ComicsList items={getComicsByType('Comic')} />) : (<></>)}
            </section>

            <section className="col s12">
                <h4 className="white-text">Magazines</h4>
                {isListLoaded ? (<ComicsList items={getComicsByType('Magazine')} />) : (<></>)}
            </section>

            <section className="col s12">
                <h4 className="white-text">Grapich Novel</h4>
                {isListLoaded ? (<ComicsList items={getComicsByType('Graphic Novel')} />) : (<></>)}
            </section>

            <section className="col s12">
                <h4 className="white-text">Trade Paperback</h4>
                {isListLoaded ? (<ComicsList items={getComicsByType('Trade Paperback')} />) : (<></>)}
            </section>
            
        </div>
    )
}
