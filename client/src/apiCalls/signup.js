import { axiosInstance } from "./index";

export const archivesData = async () => {
    try{
        const response = await axiosInstance.get('/api/v1/archives');
        return response.data;
    }
    catch(err){
        return err;
    }
}