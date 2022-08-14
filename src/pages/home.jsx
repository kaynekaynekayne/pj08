import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card from '../components/card';

const Home = () => {

    const [events, setEvents]=useState([]);
    console.log(events);
    
    useEffect(()=>{
        getEvents();
    },[])
    
    const getEvents=async()=>{
        const response=await axios.get(`http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_OPENDATA_KEY}/json/culturalEventInfo/1/10/`)
        const {row}=response.data.culturalEventInfo;
        setEvents(row);
    }

    return (
        <div>  
            {events.map((event)=>
                <Card key={event.MAIN_IMG} event={event}/>
            )}
        </div>
    );
};

export default Home;