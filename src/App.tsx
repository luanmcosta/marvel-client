import React, { useEffect, useContext} from 'react';
import { api } from './lib/api';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import {ComicsContext ,ComicsContextType} from './contexts/ComicsContext';

import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';

import 'materialize-css/dist/js/materialize.min.js'

import './styles.css';

import {Main} from './components/Main';

import { Banner } from './components/Banner';
import { ModalOrder } from './components/ModalOrder';

/* Comic, Magazine, Trade Paperback, Graphic Novel */

function App() {
  
  const {addComics, setIsListLoaded, setComics} = useContext(ComicsContext) as ComicsContextType;

  function getComics(type: string){
    return api.get('/comics', {
      params: { 
        limit: 10,
        format: type
      }
    });
  }

  useEffect(() => {
    setComics([]);
    setIsListLoaded(false);
    Promise.all([getComics('Comic'), getComics('Magazine'), getComics('Trade Paperback'), getComics('Graphic Novel')])
    .then((data) => {
      data.forEach((result) => {
        addComics(result.data.data.results);
      })
      setIsListLoaded(true)
    })
  }, []);
  
  return (
  
      <main className='main'>
        <Navbar />
        <ModalOrder />
        <Banner />
        <Main />   
        <Footer />
      </main>
    )
  }
  
  export default App
  