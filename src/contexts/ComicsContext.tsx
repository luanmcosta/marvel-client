import React, { createContext, PropsWithChildren, useState } from "react";

export interface ComicInfo {
    id: number,
    title: string,
    description: string,
    images: string,
    selected: boolean,
    thumbnail: {
        path: string,
        extension: string
    }
}

export type ComicsContextType = {
    comics: ComicInfo[],
    selectComic: (index: number) => void;
    sendComics: () => void;
    addComics: (comics: ComicInfo[]) => void,
    clearSelectedComics: () => void
    isAnySelected: () => boolean,
    address: string,
    setAddress: (addr: string) => void,
    selectedComics: () => ComicInfo[],
    currentPage: number,
    setCurrentPage: (page: number) => void,
    getComicsByPage: () => ComicInfo[]
}

export const ComicsContext = createContext<ComicsContextType | null>(null);

interface ComicsProviderProps{
    children: any
}

function ComicsProvider({children}: ComicsProviderProps){

    const [comics, setComics] = useState<ComicInfo[]>([]);
    const [address, setAddress] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    function selectComic(index: number) {
        var tempComics = [...comics];
        tempComics[index].selected = !tempComics[index].selected;
        setComics(tempComics);
    }
    
    function addComics(comics: ComicInfo[]){
        var tempComics = [...comics];
        tempComics.forEach(comic => {
            comic.selected = false;
        });
        setComics(tempComics);
    }

    function sendComics() {
        alert('Sending Comics to the address');
    }

    function selectedComics(){
        return comics.filter(comic => comic.selected == true);
    }

    function clearSelectedComics(){
        var tempComics = [...comics];
        tempComics.forEach(comic => {
            comic.selected = false;
        });
        setComics(tempComics);
    }

    function getComicsByPage(){
        return comics.slice((currentPage*20)-20, (currentPage*20));
    }

    function isAnySelected() {
        return comics.some(comic => comic.selected == true)
    }

    return <ComicsContext.Provider value={{comics, selectComic, sendComics, addComics, clearSelectedComics, isAnySelected, address, setAddress, selectedComics, currentPage, setCurrentPage, getComicsByPage}} >{children}</ComicsContext.Provider>
}

export default ComicsProvider;
