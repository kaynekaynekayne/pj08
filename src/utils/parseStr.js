import XMLParser from 'react-xml-parser';

const parseStr=(dataset, variable)=>{
    const dataArr=new XMLParser().parseFromString(dataset).children;
    const detailedArr=dataArr.map(data=>data.children)
    return detailedArr
    // return detailedArr.flat().filter(data=>data.name===variable)
}

export default parseStr;