import { ComicInfo, ComicsContext, ComicsContextType } from '../../contexts/ComicsContext'
import {ComicsList} from '../ComicsList'

import M from 'materialize-css/dist/js/materialize.min.js'
import { useContext, useEffect } from 'react'


export default function Main() {

    const {getComicsByPage} = useContext(ComicsContext) as ComicsContextType;

    useEffect(() => {
        let el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {swipeable: true});
    });

    return (
        <div className='center-flex'>
            <div className='box'>
                
                {getComicsByPage() ? (<ComicsList items={getComicsByPage()} />) : (<></>)}
                
            </div>
        </div>
    )
}
