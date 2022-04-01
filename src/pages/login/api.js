import { publicApi } from '../../services/axios'




export const getUserData = (code, payload) => {
    return publicApi.post('https://arcelik-demo.vercel.app/authenticate', payload)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}
