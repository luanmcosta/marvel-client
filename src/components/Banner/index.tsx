import { useContext } from 'react';
import { ComicsContext, ComicsContextType } from '../../contexts/ComicsContext';
import bgBanner from './../../assets/img/bg.jpg'

export function Banner() {

    const {comics} = useContext(ComicsContext) as ComicsContextType;

    return (
        <>
            <div className="banner white-text" style={{backgroundImage: `url(${bgBanner})`}}>
                
                <div className="row">

                    <div className='col'>
                        <h2 className='bold'>Marvel Comics</h2>

                        <p>
                            Select and buy your favorites comics and magazines.
                        </p>

                        <a href="#catalog"  className='btn white-text waves-ripple'>
                            See More
                        </a>
                    </div>
                    
                </div>   

            </div>
        </>
    )
}