import React from 'react'

import bgBanner from './../../assets/img/bg.jpg'

export function Banner() {

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