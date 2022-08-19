import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {kopis} from '../services/kopis';
import xmlConverter from '../utils/xmlConverter';
import formatDetailData from '../utils/formatDetailData';

const InfoEvent = () => {
    let params=useParams();
    let {id}=params;

    const [details, setDetails]=useState({});
    
    const getInfo=async()=>{
        const response=await kopis.detail(id);
        const data=await xmlConverter(response);
        const items=formatDetailData(data);
        console.log(items);
        setDetails(items);
    }

    useEffect(()=>{
        getInfo();
    },[]);

    return (
        <div>
            <img src={details.poster} style={{width:'300px'}} />
            <h3>{details.prfnm}</h3>
            <h3>{details.fcltynm}</h3>
            <div className="meta">
                <p>{details.prfpdfrom}-{details.prfpdto}</p>
                <p>{details.prfstate}</p>
                <p>{details.prfcast}</p>
                <p>공연시간: {details.prfruntime}</p>
                <p>{details.pcseguidance}</p>
            </div>
        </div>
    );
};

export default InfoEvent;