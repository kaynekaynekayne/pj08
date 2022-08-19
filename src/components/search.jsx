import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Search = () => {
    const navigate=useNavigate();

    const [term, setTerm]=useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/"+term);
        setTerm("");
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text"
                value={term}
                placeholder="공연을 검색하세요"
                onChange={(e)=>setTerm(e.target.value)}
                minLength='2'
            />
        </form>
    );
};

export default Search;