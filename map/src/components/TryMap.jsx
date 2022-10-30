import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  Popup,
  LayersControl,
} from "react-leaflet"
import { useState, useRef, useEffect } from "react"
import L from "leaflet"
import osm from "../app/osm-providers"
import "leaflet/dist/leaflet.css"
import useGeoLocation from "../hooks/useGeoLocation"
import { staticData } from "../app/staticData"
import PrimaryButton from "./UI Components/Button/PrimaryButton"
import ReactRouting from "./reactRouting"
import 'leaflet-routing-machine'
export default function TryMap() {
  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 })
  const mapRef = useRef()
  const markerRef = useRef()
  const ZOOM_LEVEL = 16
  const position = [51.505, -0.09] // test purpose
  const location = useGeoLocation()
  const [isDragged, setIsDragged] = useState(false)
  const [getLocationName, setGetLocationName] = useState("")
  const [map, setMap] = useState(null)


  const tileRef= useRef()
// changable values
  const markerIcon = L.icon({
    iconUrl:
      "https://img.icons8.com/external-prettycons-lineal-color-prettycons/452/external-location-pin-essentials-prettycons-lineal-color-prettycons-2.png",
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })
   
  const getMousePosition = (e) => {
    const { lat, lng } = e.latlng
    setCenter({ lat, lng })
    setIsDragged(true)
    console.log("lat", lat, "lng", lng)
  }
// get my location or fly to certain location thing
  const handleClick = (e) => { 
    if (location.loaded && !location.error) {
      console.log("your location is", location.coordinates)
      
      mapRef.current.flyTo(
        position,
        ZOOM_LEVEL,
        { animate: true }
      )
      console.warn("isDragged",isDragged)
    } else {
      console.log("not loaded")
    }
  

  }
// adds a marker to the map
  const newMarker = (e) => {
    // if(markerRef.current) return
    console.log(markerRef.current)
  
    console.warn("isDragged",isDragged)
    // get mouse click position
    let latLng = mapRef.current.mouseEventToLatLng(e)
    // add marker to map
    let marker = L.marker([latLng.lat-0.00005, latLng.lng], { icon: markerIcon }).addTo(
      mapRef.current
    )
   
    console.log("latitude longitude",latLng)
    const geodingUrl=`https://api.opencagedata.com/geocode/v1/json?q=${latLng.lat}+${latLng.lng}&key=1c7e646c300b43d4a8c16a1a3d7e0d70`
    fetch(geodingUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log("data",data)
      marker.bindPopup(data.results[0].formatted).openPopup()
      // setGetLocationName(data.results[0].formatted)
      console.log("locationOfLoli",data.results[0].formatted)
    }
    )
  }



  return (
    <div onClick={newMarker}
    className="map-container"
    >
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
        className="map"
        ref={mapRef}
        whenCreated={(map) => {
          map.on("click", getMousePosition)
        }}

      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
          ref={tileRef}
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
            position={position}
          >
            <Circle
              center={position}
              pathOptions={{ color: "blue" }}
              radius={110}
            />
     
            <Popup>
              <div>
                <h3>your location</h3>
                <p>lat: {location.coordinates.lat}</p>
                <p>lng: {location.coordinates.lng}</p>
              </div>
            </Popup>
          </Marker>
        )}
        {}
        {staticData.map((item, index) => 
        (
          <Marker
            key={index}
            position={[item.latitude, item.longitude]}
            icon={markerIcon}
            ref={markerRef}
          >
             {console.log("index",index)}
            <Popup>
              <div>
                <h3>{item.name}</h3>
                <p>lat: {item.latitude}</p>
                <p>lng: {item.longitude}</p>
              </div>
            </Popup>
          </Marker>
          
        ))}
      </MapContainer>
      <PrimaryButton text="Locate Me" clickEvent={handleClick} />
    </div>
  )
}
