import axios from 'axios';


const apis = axios.create({
    baseURL: 'http://k02a3051.p.ssafy.io:7888/'
    // baseURL:'http://192.168.1.242:7888/'
});

apis.defaults.headers.common['Content-Type'] = 'application/json'

export default apis;