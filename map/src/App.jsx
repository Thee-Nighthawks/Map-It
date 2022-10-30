import "./App.css"
import GoogleMapsReact from 'google-map-react'
import TryMap from "./components/TryMap";
import useGeoLocation from "./hooks/useGeoLocation";
function App() {
  const coordinates = {
    lat: 59.95,
    lng: 30.33
  }

  return (
    <div className="App">
       <h1>some project</h1>
          
          <TryMap />
         </div>
         
  );
}

export default App
