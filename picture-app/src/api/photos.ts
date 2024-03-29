import axios from "axios";
import { urlAPI } from '@/helpers/helper';

export const getPhotos = async (page: number, sort: string) => {
    try {
        const response = await axios.get(`${urlAPI}/photos?page=${page}&order_by=${sort}`, {
            headers: {
                'Accept-Version': 'v1',
                'Authorization': `Client-ID ${process.env.ACCESS_KEY}`
            }
        });
        return response;
    } catch (error: any) {
        console.log(error)
    }
}

export const getPhoto = async (id: string) => {
    try {
        const response = await axios.get(`${urlAPI}/photos/${id}`, {
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