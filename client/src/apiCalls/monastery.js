import { axiosInstance } from "./index";

export const monasteryData = async () => {
    try{
        const response = await axiosInstance.get('api/v1/monasteries');
        return response.data;
    }
    catch(err){
        return err;
    }
}