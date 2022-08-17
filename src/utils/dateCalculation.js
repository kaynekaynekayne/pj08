import React from 'react';

const dateCalculation = () => {
    // const date=new Date().toISOString().slice(0,10).replaceAll("-","");
    // return date;

    const nextYear=new Date().getFullYear()+1;
    const date=new Date().toISOString().slice(5,10).replaceAll("-","");
    return nextYear+date;
};

export default dateCalculation;