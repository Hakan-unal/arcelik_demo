import axios from 'axios';
import config from './config.json';


const base = config.apiBase;

export const protectedApi = axios.create({
    baseURL: base
});

export const publicApi = axios.create({
    baseURL: base,
})
