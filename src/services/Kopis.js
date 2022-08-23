import axios from "axios";

class Kopis{
    constructor(){
        this.kopis=axios.create({
            baseURL:"/openApi/restful/"
        })
        this.key=process.env.REACT_APP_OPENDATA_KEY
        this.year=new Date().getFullYear(); 
        this.date=new Date().toISOString().slice(5,10).replaceAll("-","");
    }
    
    async mainEvents(){
        const response=await this.kopis.get('pblprfr',{
            params:{
                service:this.key,
                stdate:this.year-1+this.date,
                eddate:this.year+1+this.date,
                cpage:1,
                rows:5,
                prfstate:'02',
                signgucode:	11
            }
        });
        return response.data;
    }

    async search(query){
        const response=await this.kopis.get('pblprfr',{
            params:{
                service:this.key,
                stdate:this.year-10+this.date,
                eddate:this.year+2+this.date,
                cpage:1,
                rows:15,
                shprfnm:query,
            }
        });
        // console.log(response)
        
        return response.data;
    }

    async eventDetail(id){
        const response=await this.kopis.get(`pblprfr/${id}`,{
            params:{
                service:this.key,
            }
        })
        return response.data;
    };

    async placeDetail(code){
        const response=await this.kopis.get(`prfplc/${code}`,{
            params:{
                service:this.key,
            }
        })
        return response.data;
    }

}
export const kopis=new Kopis();
export default Kopis;