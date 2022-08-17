import axios from "axios";

const eventApi=axios.create({
    baseURL:"/openApi/restful",
})

export default eventApi;