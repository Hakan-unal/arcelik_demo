import { publicApi } from '../../services/axios'

import axios from "axios"


export const getUserData = (code, payload) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
        }
    }
    return axios.post('https://arcelik-demo.vercel.app/authenticate', payload, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}

