import axios from "axios";
import { urlAPI } from '@/helpers/helper';

export const getPhotos = async (page: number) => {
    try {
        const response = await axios.get(`${urlAPI}/photos?page=${page}`, {
            headers: {
                'Accept-Version': 'v1',
                'Authorization': `Client-ID ${process.env.ACCESS_KEY}`
            }
        });
        console.log(response)
        return response;
    } catch (error: any) {
        console.log(error)
    }
}