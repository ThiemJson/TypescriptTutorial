import axios from 'axios';
const AxiosInstance = axios.create();
async function getCasestaFromMonth (month: string ,day : string){
    return await AxiosInstance.get(`https://api.covid19api.com/country/vietnam/status/confirmed?from=2020-${month}-01T00:00:00Z&to=2020-${month}-${day}T00:00:00Z`)
    .then(res => res.data)
    .then(dataJSON => ( dataJSON[parseInt(day) - 1]["Cases"] )- dataJSON[0]["Cases"])
    .catch((err)=>console.log(err))
}
export {getCasestaFromMonth} 
