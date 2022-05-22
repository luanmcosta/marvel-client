import { createContext, useEffect, useState, Provider, useContext} from 'react'
import { api } from './lib/api'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import {ComicsContext ,ComicsContextType} from './contexts/ComicsContext'

import 'material-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.min.css'
import './styles.css'

import bgMain from './assets/img/bg2.jpg'
import Main from './components/Main'
import { ModalSendComics } from './components/ModalSendComics'
import { ModalDetailedComic } from './components/ModalDetailedComic'

function App() {
  
  const {comics, addComics} = useContext(ComicsContext) as ComicsContextType;
  
  function getComics(){
    api.get('/comics', {
      params: {
        offset: 40
      }
    })
    .then((data) => {
      addComics(data.data.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    getComics();
  }, []);
  
  return (
  
      <main className='main' style={{backgroundImage: `url(${bgMain})`}} >
        <Navbar />
        <ModalSendComics/>
        <Main comics={comics}/>   
        <Footer />
      </main>
    )
  }
  
  export default App
  