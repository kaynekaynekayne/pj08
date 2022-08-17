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
                rows:10,
                prfstate:'02'
            }
        })
        const dataset=response.data;
        const items=parseStr(dataset,"prfnm").flat();
        // console.log(items)
        // name, attributes, children, value가
        //0. 잡다하게 섞인 배열을 받음


        //1. 배열에서 name:'value'만 남김
        const arr=[]
        items.forEach((item) => { //for each item in original array
            const obj = {} //define an object structure
            obj[item.name] = item.value; //assign the desired key value pair
            arr.push(obj) //put your object in the array
        })
        // console.log(arr)

        //2.
        const newArr=[];
        for(let i=0; i<arr.length; i++){
            if(i%9===0){
                const result=arr.slice(i,i+9).reduce((prev,curr)=>{
                    const key=Object.keys(curr)[0];
                    return(
                        {
                            ...prev,
                            [key]:curr[key]
                        }
                    )
                })
                newArr.push(result);
            }
        }
        console.log(newArr)
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