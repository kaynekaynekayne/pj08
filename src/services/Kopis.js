import axios from "axios";

class Kopis{
    constructor(){
        this.kopis=axios.create({
            baseURL:"/openApi/restful/"
        })
        this.key=process.env.REACT_APP_OPENDATA_KEY
    }

    async mainEvents(){
        const response=await this.kopis.get('pblprfr',{
            params:{
                service:this.key,
                stdate:'20220101',
                eddate:'20230404',
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
                stdate:'20130101',
                eddate:'20230404',
                cpage:1,
                rows:5,
                shprfnm:query,
            }
        });
        return response.data;
    }
}
export const kopis=new Kopis();
export default Kopis;