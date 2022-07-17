import { useContext, useEffect, useState } from "react"

import M from 'materialize-css/dist/js/materialize.min.js'
import bgNav from './../../assets/img/bg2.jpg'
import imgNotFound from './../../assets/img/img-not-found.jpg'

import { ComicInfo, ComicsContext, ComicsContextType } from "../../contexts/ComicsContext";

export function Navbar () {

    const [scrolled, setScrolled] = useState(false);

    const {isAnySelected, selectedComics, clearSelectedComics} = useContext(ComicsContext) as ComicsContextType;

    function checkScroll(){
        document.documentElement.scrollTop ? setScrolled(true) : setScrolled(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});
        M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {});
        M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
    },[]);

    function handleOrderModal(){
        if(isAnySelected()){
            var instance = M.Modal.getInstance(document.querySelector('#modal-order'));
            instance.open();
        }else {
            M.toast({html: 'You must select at least one item.'});
        }

    }

    function handleClearSelection(){
        clearSelectedComics();
    }

    function getImage(comic: ComicInfo){
        if(comic.thumbnail.path == 'http://x.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
          return imgNotFound
        return comic.thumbnail.path + '.' + comic.thumbnail.extension
    }

    return (
        <div className="navbar-fixed">
            
            <nav className={scrolled ? 'nav-bg' : 'N/A transparent'}>
                <div className="nav-wrapper center-l">
                    <a href="#!" className="brand-logo col bold left" data-target="slide-out">
                        Marvel<span className="red-text text-darken-1">Comics</span>
                    
                    </a>
                    <ul className="right" style={{paddingRight: 10}}>
                        <li className="sendable">
                            <a data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons right">view_module</i></a>
                        </li>    
                    </ul>

                </div>
            </nav>

            
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={bgNav} />
                        </div>
                        <a href="#"><h4 className="white-text">Marvel<span className="red-text">Comics</span></h4></a>
                        <a href="#"><span className="white-text name">That's just for a job application.</span></a>
                        <a href="#"><span className="white-text email">github.com/luanmcosta</span></a>
                    </div>
                </li>
                <li><a href="#!" onClick={handleOrderModal}><i className="material-icons">send</i>Send my Comics</a></li>
                <li><a onClick={handleClearSelection} href="#!">Clear Selection</a></li>
                <li><div className="divider"></div></li>
                <li><a className="header">My Colletion</a></li>
                <li>
                    <div className="">
                        {selectedComics().map((comic, index) => (
                            <div className="col s6 m6 l6" key={index}>
                                <a className="subheader" href="#!"><img className="mini-img" src={getImage(comic)} /></a>
                            </div>
                        ))
                        }
                    </div>
                </li>
                
            </ul>
        </div>
    )
}