import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card from '../components/card';
//
import { kopis } from '../services/Kopis';
import parseStr from '../utils/parseStr';
import formatData from '../utils/formatData';

const Home = () => {

    const [events, setEvents]=useState([]);
    console.log(events);

    useEffect(()=>{
        kopis
        .mainEvents()
        .then(dataset=>parseStr(dataset))
        .then(data=>formatData(data))
        .then(items=>setEvents(items))
    },[kopis])

    return (
        <div>  
            {events.map((event)=>
                <Card key={event.mt20id} event={event}/>
            )}
        </div>
    );
};

export default Home;