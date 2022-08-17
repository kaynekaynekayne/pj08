const division=(array,pair)=>{

    const length=array.length;
    const divide=length/pair;
    const newArray=[];
    
    for (let i=0; i<=divide; i++){
        newArray.push(array.splice(0,pair));
    }

    return newArray;
}
export default division;