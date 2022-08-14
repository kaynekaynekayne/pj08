import React from 'react';

const Card = ({event}) => {
    
    const {TITLE, CODENAME, STRTDATE, MAIN_IMG}=event;

    return (
        <div>
            <h3>{TITLE}</h3>
            <h4>{CODENAME}</h4>
            <h5>{STRTDATE.slice(0,10)}</h5>
            <img src={MAIN_IMG} alt="poster"/>
        </div>
    );
};

export default Card;