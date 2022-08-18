
import React from 'react';

const formatData = (items) => {
//1. 배열에서 name:'value'만 남김
    //불만족
    const arr=[]
    items.forEach((item) => { //for each item in original array
        const obj = {} //define an object structure
        obj[item.name] = item.value; //assign the desired key value pair
        arr.push(obj) //put your object in the array
    })

    //2. []
    const newArr=[];
    const NUM_OF_OUTPUT=9; 
    for(let i=0; i<arr.length; i++){
        if(i%NUM_OF_OUTPUT===0){
            const result=arr.slice(i,i+NUM_OF_OUTPUT).reduce((prev,curr)=>{
                const key=Object.keys(curr)[0];
                return(
                    {
                        ...prev,
                        [key]:curr[key]
                    }
                )
            })
            newArr.push(result);
        }
    }
    return newArr;
};

export default formatData;
