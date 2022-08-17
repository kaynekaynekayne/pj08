import React from 'react';

const Card = ({event}) => {
    
    const {prfnm,prfpdfrom,prfpdto,fcltynm,poster}=event;

    return (
        <div>
            <h3>{prfnm}</h3>
            <h4>{prfpdfrom}</h4>
            <h4>{prfpdto}</h4>
            <h5>{fcltynm}</h5>
            {poster && 
            <img src={poster} alt="poster"/>
            }
        </div>
    );
};

export default Card;