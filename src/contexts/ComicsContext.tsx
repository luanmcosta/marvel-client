import { createContext, useState } from "react";

export interface ComicInfo {
    id: number,
    title: string,
    description: string,
    images: string,
    selected: boolean,
    format: string,
    thumbnail: {
        path: string,
        extension: string
    },
    textObjects: [{
        text: string;
    }]
}

export type ComicsContextType = {
    isListLoaded: boolean,
    setIsListLoaded: (status: boolean) => void
    comics: ComicInfo[],
    selectComic: (id: number) => void;
    sendComics: () => void;
    addComics: (comics: ComicInfo[]) => void,
    clearSelectedComics: () => void
    isAnySelected: () => boolean,
    address: string,
    setAddress: (addr: string) => void,
    selectedComics: () => ComicInfo[],
    currentPage: number,
    setCurrentPage: (page: number) => void,
    getComicsByPage: () => ComicInfo[],
    getComicsByType: (type: string) => ComicInfo[]
    setComics: (comicList: ComicInfo[]) => void,
    setDetailedComic: (comic: ComicInfo) => void,
    detailedComic: ComicInfo | null
}

export const ComicsContext = createContext<ComicsContextType | null>(null);

interface ComicsProviderProps{
    children: any
}

function ComicsProvider({children}: ComicsProviderProps){

    const [comics, setComics] = useState<ComicInfo[]>([]);
    const [address, setAddress] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isListLoaded, setIsListLoaded] = useState(true);
    const [detailedComic, setDetailedComic] = useState<ComicInfo | null>(null);

    function selectComic(id: number) {
        var tempComics = [...comics];
        
        tempComics.forEach(elem => {
            if(elem.id == id)  
                elem.selected = !elem.selected;
        });
     
        setComics(tempComics);
    }
    
    function addComics(comicList: ComicInfo[]){ //API FIX
        var tempComics = [...comics, ...comicList];
        tempComics.forEach(comic => {
            comic.selected = false;
            comic.thumbnail.path = comic.thumbnail.path.replace('http://i', "http://x");
        });
        
        setComics(prevComics => [...prevComics, ...tempComics]);
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
        return comics.slice((currentPage*10)-10, (currentPage*10));
        return comics;
    }
    
    function getComicsByType(type: string){
        return comics.filter(comic => comic.format == type)
    }

    function isAnySelected() {
        return comics.some(comic => comic.selected == true)
    }

    return <ComicsContext.Provider value={{detailedComic, setDetailedComic, setComics, isListLoaded, setIsListLoaded, comics, selectComic, sendComics, addComics, clearSelectedComics, isAnySelected, address, setAddress, selectedComics, currentPage, setCurrentPage, getComicsByPage, getComicsByType}} >{children}</ComicsContext.Provider>
}

export default ComicsProvider;
