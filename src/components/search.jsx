import React, { useState } from 'react';

const Search = () => {

    const [term, setTerm]=useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(term);
        setTerm("");
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text"
                value={term}
                placeholder="공연을 검색하세요"
                onChange={(e)=>setTerm(e.target.value)}
            />
        </form>
    );
};

export default Search;