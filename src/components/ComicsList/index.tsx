import React, { useContext } from 'react';
import { ComicInfo, ComicsContext, ComicsContextType } from '../../contexts/ComicsContext';
import ComicCard from '../ComicCard';

import Slider from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import M from 'materialize-css/dist/js/materialize.min.js';

interface ComicsListProps{
  items: ComicInfo[];
  onShowInfo: (comic: ComicInfo) => void;
}

export function ComicsList({items, onShowInfo} : ComicsListProps) {

  function onCardShowInfo(comic: ComicInfo){
    onShowInfo(comic);
    var instance = M.Modal.getInstance(document.querySelector('#modal-comic-info'));
    instance.open();
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3,
  
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 2,
      slidesToSlide: 1,
    }
  };

  return (
      <Slider
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={false} 
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
          {items.map((item, index) => {
            return (
              <div key={index} >
                <ComicCard 
                index={index}
                comic={item}
                onShowInfo={onCardShowInfo} />
              </div>
            )})
        }

      </Slider>
  )
}

export default ComicsList;