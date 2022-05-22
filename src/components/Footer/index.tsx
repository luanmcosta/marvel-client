import React, { useContext, useState } from 'react'
import { ComicsContext, ComicsContextType } from '../../contexts/ComicsContext';
import Map from '../Map'

import M from 'materialize-css/dist/js/materialize.min.js'

export function Footer() {

    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isAnyComicSelected, setIsAnyComicSelected] = useState(false);

    const {clearSelectedComics, isAnySelected, address} = useContext(ComicsContext) as ComicsContextType;

    function handleMapOpen(){
        setIsMapOpen(!isMapOpen);
    }

    function handleClearSelection(){
        clearSelectedComics();
    }
    
    function handleSendComics(){
        let modalElement = document.querySelector('#modal-send-comics');
        let instance = M.Modal.getInstance(modalElement);
        instance.open();
    }

    return (
        <footer className="page-footer footer-fixed grey darken-3">

            <div className='row map-container' 
                 style={{maxHeight: isMapOpen ? '500px' : '0px'}}>
                <Map />
            </div>

            <div className="footer-copyright grey darken-4">
                <div className="container">

                    <div className='row center'>
                        
                        <a  className="center btn white black-text" href="#!" 
                            onClick={handleMapOpen}>
                                {isMapOpen && address ? 'Hide Map' : 'Select your address'}
                        </a>

                        {address && isAnySelected() ?
                        (
                            <a  className="center btn green white-text" href="#!" 
                                onClick={handleSendComics}>
                                 SendComics
                            </a>
                        ):(
                            <></>
                        )}

                        {isAnySelected() ? 
                        (<a className="center btn grey black-text" href="#!" 
                            onClick={handleClearSelection}>
                                Clear Selection
                        </a>) : (<></>)
                        }
                    </div>

                    <div className='row center'>
                        © 2022 - Marvel Comics  -<a href='https://github.com/luanmcosta'>Luan M. Costa</a>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}
