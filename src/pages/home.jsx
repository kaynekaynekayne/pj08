import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card from '../components/card';

const Home = () => {

    const [events, setEvents]=useState([]);
    console.log(events);

    // const requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    // };
    
    // const a=()=>{
    //     fetch(`/openApi/restful/pblprfr?service=${process.env.REACT_APP_OPENDATA_KEY}&stdate=20220101&eddate=20230404&cpage=1&rows=10&prfstate=02`, requestOptions)
    //     .then(response => response.json())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    // }
    
    useEffect(()=>{
        getEvents();
        // a();
    },[])
    
    const getEvents=async()=>{
        // fetch(`http://www.kopis.or.kr/openApi/restful/pblprfr?service=${process.env.REACT_APP_OPENDATA_KEY}&stdate=20220101&eddate=20230404&cpage=1&rows=10&prfstate=02`)
        // .then(response=>{
        //     if(response.ok){
        //         return response.json();
        //     }
        //     throw new Error("Network response was not ok");
        // })
        // .then(data=>{
        //     console.log(JSON.stringify(data))
        // })
        // .catch(error=>{
        //     console.log(error)
        // })
        const response=await axios.get(`/openApi/restful/pblprfr?service=${process.env.REACT_APP_OPENDATA_KEY}&stdate=20220101&eddate=20230404&cpage=1&rows=10&prfstate=02`)
        // console.log(response);
        const obj=JSON.stringify(response.data);
        console.log(obj);
    }

    return (
        <div>  
            {/* {events.map((event)=>
                <Card key={event.MAIN_IMG} event={event}/>
            )} */}
        </div>
    );
};

export default Home;