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
        setDetails(items);
    }

    useEffect(()=>{
        getInfo();
    },[]);

    return (
        <div>
            {Object.keys(details).length===0 ? 
                <h2>Loading...</h2>:
            <>
                <img src={details.poster} style={{width:'300px'}} />
                <h3>{details.prfnm}</h3>
                <h4>{details.fcltynm}</h4>
                <div className="meta">
                    <p>{details.genrenm}</p>
                    <p>{`${details.prfpdfrom}-${details.prfpdto} (${details.prfstate})`}</p>
                    <p>{details.prfcast}</p>
                    <p>{details.pcseguidance}</p>
                    <p>공연시간: {details.prfruntime}</p>
                </div>
            </>
            }
        </div>
    );
};

export default InfoEvent;