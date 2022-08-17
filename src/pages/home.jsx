import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card from '../components/card';
//
import parseStr from '../utils/parseStr';
import eventApi from '../api/eventApi';

const Home = () => {

    const [events, setEvents]=useState([]);
    // console.log(events);

    useEffect(()=>{
        getEvents();
    },[])
    
    const getEvents=async()=>{
        const response=await eventApi.get(`/pblprfr?service=${process.env.REACT_APP_OPENDATA_KEY}`,{
            params:{
                stdate:new Date().toISOString().slice(0,10).replaceAll("-",""),
                eddate:'20230404',
                cpage:1,
                rows:1,
                prfstate:'02'
            }
        })
        const dataset=response.data;
        const items=parseStr(dataset,"prfnm").flat();
        console.log(items)
        
        const arr=[]
        
        const c=items.forEach((item) => { //for each item in original array
            const obj = {} //define an object structure
            obj[item.name] = item.value; //assign the desired key value pair
            arr.push(obj) //put your object in the array
        })
        console.log(arr)
        // setEvents(arr);
        const newObj=arr.reduce((o,c)=>{
            const key=Object.keys(c)[0];
            return({
                ...o,
                [key]:c[key]
            })
        })
        console.log(newObj)
}

    return (
        <div>  
            {/* {events.map((event)=>
                <Card event={event}/>
            )} */}
        </div>
    );
};

export default Home;