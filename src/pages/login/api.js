import { publicApi } from '../../services/axios'




export const getUserData = (code, payload) => {
    return publicApi.post('http://localhost:8080/authenticate', payload)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

