import { ComicInfo } from '../../contexts/ComicsContext'
import {ComicsList} from '../ComicsList'

interface MainProps {
    comics : ComicInfo[]
}

export default function Main({comics} : MainProps) {

    return (
        <div className='center-flex'>
            <div className='box'>
                <div className='row'>
                    {comics ? (<ComicsList items={comics} />) : (<></>)}
                </div>
            </div>
        </div>
    )
}
