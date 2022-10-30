import {MapContainer,TileLayer,Marker,Circle,Popup,LayersControl} from 'react-leaflet'
import {useState,useRef} from 'react'
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
        iconUrl: 'https://img.icons8.com/ios-glyphs/344/location-off.png',
        iconSize: [38, 95],
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


    return(
        <div>

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
                {location.loaded && !location.error && (
                    <Marker 
                    // icon={markerIcon}
                    position={[location.coordinates.lat,location.coordinates.lng]} 
                    />
                )}
        
                        {staticData.map((item,index)=>
                            (
                                <Marker 
                                key={index}
                                position={[item.latitude,item.longitude]} 
                                />
                            )
                        )}
            </MapContainer>
          
            <button
            onClick={handleClick}
          >locate me</button>
        </div>
    )
}