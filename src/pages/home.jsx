import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card from '../components/card';
//
import { kopis } from '../services/kopis';
import xmlConverter from '../utils/xmlConverter';
import formatData from '../utils/formatData';

const Home = () => {

    const [events, setEvents]=useState([]);
    
    useEffect(()=>{
        getEvents();
    },[kopis]);

    const getEvents=async()=>{
        const response=await kopis.mainEvents();
        const data=await xmlConverter(response);
        const items=formatData(data);
        setEvents(items);
    }

    return (
        <div> 
            {events.length===0 ? <h2>Loading...</h2> :
                events.map((event)=>
                    <Card key={event.mt20id} event={event}/>
                )
            }
        </div>
    );
};

export default Home;