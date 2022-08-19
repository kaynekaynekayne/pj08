import React from 'react';

const formatDetailData = (data) => {

    const newObj=new Object();
    for(let i=0; i<data.length; i++){
        newObj[data[i].name]=data[i].value
    }
    console.log(newObj);
    return newObj;
};

export default formatDetailData;