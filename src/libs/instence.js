import axios from "axios";

const init = axios.create({
    baseURL: 'http://localhost:3000',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default init;