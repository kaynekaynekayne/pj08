import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {kopis} from '../services/kopis';
import xmlConverter from '../utils/xmlConverter';
import formatDetailData from '../utils/formatDetailData';

const InfoEvent = () => {
    //얘네를 다 위로(info) 올려버리는 방법도 잇음 (map이랑 데이터 공유 때문에)
    let params=useParams();
    let {id}=params;
    const [details, setDetails]=useState({});
    
    const getInfo=async()=>{
        try{
            const response=await kopis.detail(id);
            const data=await xmlConverter(response);
            const items=formatDetailData(data);
            setDetails(items);
        }catch(err){
            alert(err.message);
        }
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