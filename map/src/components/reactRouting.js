import {useState,useEffect} from 'react'
import 'leaflet-routing-machine'
export default function ReactRouting() {
    const [map,setMap] = useState(null)
    useEffect(()=>{
        if(map){
            L.Routing.control({
                waypoints: [
                    L.latLng(57.74, 11.94),
                    L.latLng(57.6792, 11.949)
                ]
            }).addTo(map);
        }
    },[map])
    return {map,setMap}
}
