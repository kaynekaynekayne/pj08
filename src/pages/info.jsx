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
    const [location,setLocation]=useState({lat:null, lng:null});

    const getDetails=async()=>{
        try{
            const response=await kopis.eventDetail(id);
            const data=await xmlConverter(response);
            const items=formatDetailData(data);
            setDetails(items);
            setPlaceCode(items.mt10id);
        }catch(err){
            console.log(err.message);
        }
    }

    const getPlaces=async()=>{
        try{
            const response=await kopis.placeDetail(placeCode);
            const data=await xmlConverter(response);
            const items=formatDetailData(data);
            console.log(items);
            setLocation({lat:items.la,lng:items.lo})
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        getDetails();
    },[id]);

    //useEffect 하나 더 만들기? 경도 위도 구할 수 있는걸로(kopis.placedetail)

    useEffect(()=>{
        getPlaces();
    },[placeCode]);

    return (
        <div>
            <InfoEvent details={details}/>
            <InfoMap location={location}/>
        </div>
    );
};

export default Info;