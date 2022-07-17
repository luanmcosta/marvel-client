import { useContext } from 'react'
import { ComicInfo, ComicsContext, ComicsContextType } from '../../contexts/ComicsContext';
import { ComicCard } from '../ComicCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel'

import M from 'materialize-css/dist/js/materialize.min.js'

import 'react-multi-carousel/lib/styles.css';

interface ComicsListProps{
  items: Array<ComicInfo>;
}

export function ComicsList({items} : ComicsListProps ) {

  const {setDetailedComic} = useContext(ComicsContext) as ComicsContextType;

  function onCardShowInfo(comic: ComicInfo){
    setDetailedComic(comic);
    var modalElement = document.querySelector('#modal-comic-info');
    var instance = M.Modal.getInstance(modalElement);
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

    <>

      <Carousel
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
          return (<ComicCard 
            key={item.id} 
            index={item.id} 
            comic={item}
            onShowInfo={onCardShowInfo} />)
          }
        )}
      </Carousel>;

    </>
  )
}

export default ComicsList;