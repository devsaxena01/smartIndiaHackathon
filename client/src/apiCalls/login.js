import { axiosInstance } from "./index";

export const loginData = async () => {
    try{
        const response = await axiosInstance.get('/api/v1/users/login');
        return response.data;
    }
    catch(err){
        return err;
    }
}