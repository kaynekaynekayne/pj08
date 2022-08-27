import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {kopis} from '../services/kopis';
import xmlConverter from '../utils/xmlConverter';
import formatDetailData from '../utils/formatDetailData';

import InfoEvent from '../components/infoEvent';
import InfoMap from '../components/infoMap';

const Info = () => {
    let params=useParams();
    let {id}=params;
    
    const [details, setDetails]=useState({});

    const [placeCode,setPlaceCode]=useState("");
    console.log(Boolean(placeCode))
    const [location,setLocation]=useState({lat:null, lng:null, place:null});
    
    const getDetails=async()=>{
        try{
            const response=await kopis.eventDetail(id);
            const data=await xmlConverter(response);
            const items=formatDetailData(data);
            console.log(items);
            setDetails(items);
            setPlaceCode(items.mt10id);
            
        }catch(err){
            console.log(err.message);
        }
    }

    const getPlaces=async()=>{
        try{
            const response=await kopis.placeDetail(placeCode);
            console.log(response);
            const data=await xmlConverter(response);
            const items=formatDetailData(data);
            console.log(items);
            setLocation({lat:parseFloat(items.la),lng:parseFloat(items.lo),place:items.adres})
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        getDetails()
    },[id]);

    //useEffect 하나 더 만들기? 경도 위도 구할 수 있는걸로(kopis.placedetail)
    useEffect(()=>{
        placeCode && getPlaces();
    },[placeCode]);


    return (
        <section>
            <div className='container'>
                <InfoEvent details={details}/>
                {!Object.values(location).some(x=>x===null) &&                
                    <InfoMap location={location}/>
                }
                {/*lat, lng 안에 데이터가 없으면 infoMap으로 안 보낼거임*/}
            </div>
        </section>

    );
};

export default Info;