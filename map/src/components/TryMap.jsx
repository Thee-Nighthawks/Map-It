import {MapContainer,TileLayer,Marker,Circle,Popup,LayersControl} from 'react-leaflet'
import {useState,useRef, useEffect} from 'react'
import L from 'leaflet'
import osm from '../app/osm-providers'
import 'leaflet/dist/leaflet.css'
import useGeoLocation from '../hooks/useGeoLocation'
import { staticData } from '../app/staticData'
export default function TryMap() {
    const [center,setCenter] = useState({lat: 59.95,lng: 30.33})

    const mapRef = useRef()
    const ZOOM_LEVEL=16
    const position = [51.505, -0.09] // test purpose
    const location=useGeoLocation()

    //  changable values
    const markerIcon = L.icon({
        iconUrl: 'https://img.icons8.com/external-prettycons-lineal-color-prettycons/452/external-location-pin-essentials-prettycons-lineal-color-prettycons-2.png',
        iconSize: [38, 38],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    })

    const handleClick = (e) => {
        if(location.loaded && !location.error){
          console.log('your location is',location.coordinates)
            mapRef.current.flyTo([location.coordinates.lat,location.coordinates.lng],
                ZOOM_LEVEL,
                {animate:true}
            )        
        }else{
          console.log("not loaded")
        }
      }

        const newMarker = (e) => {
            console.log('new marker')
            // get mouse click position
            let latLng=mapRef.current.mouseEventToLatLng(e)
            console.log(latLng)
            // add marker to map
            let marker = L.marker([latLng.lat,latLng.lng],{icon:markerIcon}).addTo(mapRef.current)
        }
    return(
        <div onClick={newMarker}>

            <MapContainer 
            center={center} 
            zoom={ZOOM_LEVEL}
            scrollWheelZoom={true}
            style={{height:'100vh',width:'100%'}}
            ref={mapRef}
            whenCreated={handleClick}
            >
                <TileLayer
                    url={osm.maptiler.url}
                    attribution={osm.maptiler.attribution}
                />
                <LayersControl position="topright">
                    <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
                        <TileLayer
                            url={osm.maptiler.url}
                            attribution={osm.maptiler.attribution}
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                        <TileLayer
                           url={osm.maptiler.url}
                            attribution={osm.maptiler.attribution}
                        />
                    </LayersControl.BaseLayer>
                   </LayersControl>

                {location.loaded && !location.error && (
                    <Marker 
                    // icon={markerIcon}
                    position={[location.coordinates.lat,location.coordinates.lng]} 
                    >
                        <Circle
                            center={[location.coordinates.lat,location.coordinates.lng]}
                            pathOptions={{color:'blue'}}
                            radius={110}
                        />
                        {/* {console.log(location.coordinates.accuracy)} */}
                        <Popup>
                            <div>
                                <h3>your location</h3>
                                <p>lat: {location.coordinates.lat}</p>
                                <p>lng: {location.coordinates.lng}</p>
                            </div>
                        </Popup>
                    </Marker>
                )}
        
                        {staticData.map((item,index)=>
                            (
                                <Marker 
                                key={index}
                                position={[item.latitude,item.longitude]} 
                                icon={markerIcon}
                                >
                                    <Popup>
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p>lat: {item.latitude}</p>
                                            <p>lng: {item.longitude}</p>
                                        </div>
                                    </Popup>

                                </Marker>
                            )
                        )}


                        
            </MapContainer>
          
            <button
            onClick={handleClick}
          >locate me</button>
        </div>
    )
}