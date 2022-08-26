import React, { useState } from 'react';
import {
    GoogleMap, 
    useJsApiLoader, 
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100vh'
};
const libraries=['places'];

const InfoMap = ({location}) => {
    const {lat, lng, place}=location;
    console.log(lat, lng)
    const {isLoaded}=useJsApiLoader({
        id:'google-map-script',
        googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAP_KEY,
        libraries,
    })
    
    const [map, setMap]=useState(/** @type google.maps.Map */(null));
    const [origin,setOrigin]=useState("");
    console.log(place);
    const [destination, setDestination]=useState("");

    const [directionsResponse, setDirectionsResponse]=useState(null);
    const [distance, setDistance]=useState("");
    const [duration, setDuration]=useState("");

    const onToggleClick=()=>{
        setOrigin(destination);
        setDestination(origin);
    };

    const getRoute=async()=>{
        if(origin==="" || destination===""){
            return;
        }

        try{
            const directionService=new window.google.maps.DirectionsService();
            const results=await directionService.route({
                origin,
                destination,
                travelMode:window.google.maps.TravelMode.TRANSIT,
            })
            setDirectionsResponse(results);
            setDistance(results.routes[0].legs[0].distance.text);
            setDuration(results.routes[0].legs[0].duration.text);
        }catch(err){
            console.log(err.message);
        }
    }

    const clearRoute=()=>{
        setDirectionsResponse(null);
        setDistance("");
        setDuration("");
        setOrigin("");
        setDestination("");
    }

    return isLoaded ? (
        <section style={{flexBasis:'50%', backgroundColor:'mintcream'}}>
            <div>
                <Autocomplete>
                    <input 
                        placeholder="Starting point"
                        type="text"
                        onChange={(e)=>setOrigin(e.target.value)}
                        value={origin}
                    />
                </Autocomplete>
                <Autocomplete>
                    <input 
                        placeholder="Destination"
                        type="text"
                        onChange={(e)=>setDestination(e.target.value)}
                        value={destination}
                    />
                </Autocomplete>
                <button onClick={onToggleClick}>Reverse</button>
                <button onClick={getRoute} type="submit">Go</button>
                <button onClick={clearRoute}>X</button>
                <div>
                    <p>distance {distance}</p>
                    <p>duration {duration}</p>
                </div>
                <button onClick={()=>map.panTo({lat,lng})}>back to center</button>
            </div>

            <GoogleMap
                zoom={18}
                center={{lat,lng}}
                mapContainerStyle={containerStyle}
                options={{
                    mapTypeControl:false,
                    streetViewControl:false,
                    gestureHandling:'greedy'
                }}
                onLoad={(map)=>setMap(map)}
                
            >
                <Marker position={{lat,lng}}/>
                {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
            </GoogleMap>
        </section>
    ):<div>Loading...</div>
};

export default InfoMap;