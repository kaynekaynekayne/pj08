import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Card from '../components/card';
import {kopis} from '../services/kopis';
import formatData from '../utils/formatData';
import xmlConverter from '../utils/xmlConverter';

const Searched = () => {
    const [searchedEvent, setSearchedEvent]=useState([]);
    let params=useParams();
    let {keyword}=params;
    
    const getSearchingLists=async()=>{
        try{
            const response=await kopis.search(keyword);
            const data=await xmlConverter(response);
            const items=formatData(data);
            setSearchedEvent(items);
        }catch(err){
            console.log(err.message);
        }
    }
    
    useEffect(()=>{
        getSearchingLists();
    },[keyword]);

    return (
        <div>
            {searchedEvent.map((event)=>
                <Card key={event.mt20id} event={event}/>                   
            )}
        </div>
    );
};

export default Searched;