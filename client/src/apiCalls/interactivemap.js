import { axiosInstance } from "./index";

export const interactiveMapData = async (id) => {
    try{
        const response = await axiosInstance.get(`/api/v1/monasteries/${id}`);
        return response.data;
    }
    catch(err){
        return err;
    }
}