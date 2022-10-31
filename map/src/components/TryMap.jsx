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
import "leaflet-routing-machine"

export default function TryMap({ coordinates, setCoordinates }) {
  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 })
  const mapRef = useRef()
  const markerRef = useRef()
  const ZOOM_LEVEL = 16
  const position = [51.505, -0.09] // test purpose
  const location = useGeoLocation()
  const [isDragged, setIsDragged] = useState(false)
  const [getLocationName, setGetLocationName] = useState("")
  const [map, setMap] = useState(null)
  const [count, setCount] = useState(0)

  const tileRef = useRef()
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


  const radius=500
  const getMousePosition = (e) => {
    const { lat, lng } = e.latlng
    setCenter({ lat, lng })
    setIsDragged(true)
    // console.log("lat", lat, "lng", lng)
  }
  // get my location or fly to certain location thing
  const handleClick = (e) => {
    if (location.loaded && !location.error) {
      // console.log("your location is", location.coordinates)

      mapRef.current.flyTo(position, ZOOM_LEVEL, { animate: true })
      // console.warn("isDragged", isDragged)
    } else {
      // console.log("not loaded")
    }
  }
  // adds a marker to the map
  const newMarker = (e) => {
    setCount((prev) => prev + 1)
    // console.log(markerRef.current)

    // console.warn("isDragged", isDragged)
    let latLng = mapRef.current.mouseEventToLatLng(e)
    let marker = L.marker([latLng.lat - 0.00005, latLng.lng], {
      icon: markerIcon,
    }).addTo(mapRef.current)

    // console.log("latitude longitude", latLng)
    const geodingUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latLng.lat}+${latLng.lng}&key=1c7e646c300b43d4a8c16a1a3d7e0d70`
    fetch(geodingUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data)
        marker.bindPopup(data.results[0].formatted).openPopup()
        // setGetLocationName(data.results[0].formatted)
        console.log("Location", data.results[0])
        setCoordinates(data.results[0].components)
      })
      getShortestPath(latLng)
      createCircle(latLng)
      userExixtsInsideCircle(latLng)
      for(let i=0;i<10;i++)
      put100Markers()
      getAllMarkersInCircle (latLng)
  }
  const createCircle = (e) => {
    L.circle([e.lat, e.lng], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: radius,
    }).addTo(mapRef.current)
    
  }

  const userExixtsInsideCircle = (e) => {
    let userLocation = position
    let circleLocation = [e.lat, e.lng]
    let distance = mapRef.current.distance(userLocation, circleLocation)
    console.log("distance", distance)
    console.log('radius', radius)
    if (distance <= radius*2) {  // radius*2 because the distance is calculated from the center of the circle
      console.log("user is inside the circle")
    } else {
      console.log("user is outside the circle")
    }
  }

  const getAllMarkersInCircle = (e) => {
    let markers = mapRef.current._layers
    let circleLocation = [e.lat, e.lng]
    let markersInCircle = []
    for (let i in markers) {
      if (markers[i].options.icon) {
        let markerLocation = [markers[i]._latlng.lat, markers[i]._latlng.lng]
        let distance = mapRef.current.distance(markerLocation, circleLocation)
        // if (distance <= radius) {
          markersInCircle.push(markers[i])
        // }
      }
    }
    console.log("markersInCircle", markersInCircle)
  }

  const randomnumber = (number) => {
    return Math.floor(Math.random() * number)
  }

  const put100Markers = () => {
   
     L.marker([position[0] + randomnumber(100) / 100000, position[1] + randomnumber(100) / 100000], {
        icon: markerIcon,
      }).addTo(mapRef.current)
    
  }

  const getShortestPath = (e) => {
    L.Routing.control({
      waypoints: [
        L.latLng(51.5, -0.09),
        L.latLng(e.lat,e.lng),
      
      ],
    }).addTo(mapRef.current)

  }
  const task='hello task'

  return (
    <div
      onDoubleClick={count === 0 ? newMarker : null}
      className="map-container"
      style={{color:"transparent",userSelect:"none"}}
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
            {/* <Circle
              center={position}
              pathOptions={{ color: "blue" }}
              radius={radius}
            /> */}

            <Popup>
              <div>
                <h3>your location</h3>
                <p>lat: {location.coordinates.lat}</p>
                <p>lng: {location.coordinates.lng}</p>
                <p>task:{task}</p>
              </div>
            </Popup>
          </Marker>
        )}
        {staticData.map((item, index) => (
          <Marker
            key={index}
            position={[item.latitude, item.longitude]}
            icon={markerIcon}
            ref={markerRef}
          >
            
            <Popup>
              <div>
                <h3>{item.name}</h3>
                <p>lat: {item.latitude}</p>
                <p>lng: {item.longitude}</p>
              </div>
            </Popup>
           {/* add circle on click */}
          
        {console.log( item.longitude)}
          </Marker>
        ))}
      </MapContainer>
      <PrimaryButton text="Locate Me" clickEvent={handleClick} />
    </div>
  )
}
