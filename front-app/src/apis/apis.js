import axios from 'axios';


const apis = axios.create({
    baseURL: 'http://balbadack:8399/'
    // baseURL: 'http://localhost:8399/api/'
    // baseURL:'http://192.168.1.242:7888/'
});

apis.defaults.headers.common['Content-Type'] = 'application/json'

export default apis;