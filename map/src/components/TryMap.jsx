import {MapContainer,TileLayer,Marker} from 'react-leaflet'
import {useState,useRef} from 'react'
import osm from '../app/osm-providers'
import 'leaflet/dist/leaflet.css'
import useGeoLocation from '../hooks/useGeoLocation'
export default function TryMap() {
    const [center,setCenter] = useState({lat: 59.95,lng: 30.33})

    const mapRef = useRef()
    const ZOOM_LEVEL=9
    const position = [51.505, -0.09] // test purpose
    const location=useGeoLocation()


    return(
        <div>
            <MapContainer 
            center={center} 
            zoom={ZOOM_LEVEL}
            scrollWheelZoom={true}
            style={{height:'100vh',width:'100%'}}
            ref={mapRef}
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
            </MapContainer>

        </div>
    )
}