
import axios from 'axios';


const baseUrl = "https://pixabay.com";
const endPoint = "/api";



export function getImg (searchName) {
    const params = new URLSearchParams({
        key: '49031681-364093aaa4634c3b7924c5e31',
        q: searchName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });
  
    const url = baseUrl + endPoint + `?${params}`;
    return axios.get(url)

}