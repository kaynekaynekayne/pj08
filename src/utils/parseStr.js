import XMLParser from 'react-xml-parser';

const parseStr=(dataset)=>{
    const dataArr=new XMLParser().parseFromString(dataset).children;
    return dataArr.map(data=>data.children).flat()
}

export default parseStr;