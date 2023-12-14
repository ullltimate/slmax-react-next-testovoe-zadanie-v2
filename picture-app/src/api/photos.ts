import axios from "axios";
import { urlAPI } from '@/helpers/helper';

export const getPhotos = async () => {
    try {
        const response = await axios.get(`${urlAPI}/photos`, {
            headers: {
                'Accept-Version': 'v1',
                'Authorization': `Client-ID ${process.env.ACCESS_KEY}`
            }
        });
        return response.data;
    } catch (error: any) {
        console.log(error)
    }
}