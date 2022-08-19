import React,{useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {kopis} from '../services/kopis';
import formatData from '../utils/formatData';
import xmlConverter from '../utils/xmlConverter';

const Searched = () => {
    const [searchedEvent, setSearchedEvent]=useState([]);
    let params=useParams();
    let {keyword}=params;

    const getSearchingLists=async()=>{
        const response=await kopis.search(keyword);
        const data=await xmlConverter(response);
        const items=formatData(data);
        setSearchedEvent(items);
    }
    
    useEffect(()=>{
        getSearchingLists();
    },[keyword]);

    return (
        <div>
            {searchedEvent.map((event)=>
                <div key={event.mt20id}>
                    <h3>{event.prfnm}</h3>
                    <Link to={`/info/${event.mt20id}`}>
                        <img src={event.poster} style={{width:"100px"}}/>
                    </Link>
                    <h4>{event.prfpdfrom}~{event.prfpdto}</h4>
                    <h4>{event.fcltynm}</h4>
                    <h5>{event.prfstate}</h5>
                    <br/>
                </div>    
            )}
        </div>
    );
};

export default Searched;