import React, { useCallback, useState, useContext } from 'react'
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'
import { ComicsContext, ComicsContextType } from '../../contexts/ComicsContext'
import Geocode from 'react-geocode'

import M from 'materialize-css/dist/js/materialize.min.js'

interface Position {
  lat: number,
  lng: number
}
interface ComicMapProps{
  center?: Position,
  zoom?: number
}

export const MapConfig = {
  apiKey: 'YOUR GOOGLE MAP API KEY',
  center: {
    lat: -6.6048645,
    lng: -39.0611601
  },
  style: {
    width: '100%',
    height: '40vh'
  },
  zoom: 13
}

Geocode.setApiKey(MapConfig.apiKey);


export default function Map() {

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMaker] = useState(MapConfig.center);

  const {setAddress} = useContext(ComicsContext) as ComicsContextType;

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: MapConfig.apiKey
  });

  const onLoad = useCallback(((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(MapConfig.center);
    map.fitBounds(bounds);
    setMap(map);
  }), []);

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  function handleMapClick(event: google.maps.MapMouseEvent) {
    if(event.latLng){
      setMaker({
        lat: event.latLng?.lat(),
        lng: event.latLng?.lng()
     })
     
     // Get address with geocode
     Geocode.fromLatLng(event.latLng?.lat().toString(), event.latLng.lng().toString())
     .then((response) => { 
       setAddress(response.results[0].formatted_address);
       M.toast({html: 'Address located!'});
      })
     .catch((error) => { console.log(error); })
    }
    
  }

  return isLoaded ? (
    <GoogleMap
    mapContainerStyle={MapConfig.style}
    center={MapConfig.center}
    zoom={MapConfig.zoom}
    onLoad={onLoad}
    onUnmount={onUnmount}
    onClick={handleMapClick}
      >
        <MarkerF position={marker} />

    </GoogleMap>
  ) : <></>
}


