import React,{useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import searchingCard from '../components/searchingCard';
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
            {/* {items.length===0 ? <h2></h2>} */}
            {searchedEvent.map((event)=>
                <searchingCard key={event.mt20id} event={event}/>                   
            )}
        </div>
    );
};

export default Searched;