import React from 'react';
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

    return isLoaded ? (
        <section style={{flexBasis:'50%', backgroundColor:'tomato'}}>
            <div>
                <input />
                <input />
                <button>Reverse</button>
                <button>Go</button>
                <button>X</button>
                <div>
                    <p>distance</p>
                    <p>duration</p>
                </div>
                <button>back to center</button>
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
                // onLoad={}
            >
                <Marker position={{lat,lng}}/>
            </GoogleMap>
        </section>
    ):<div>Loading...</div>
};

export default InfoMap;