import { axiosInstance } from "./index";

export const signupData = async () => {
    try{
        const response = await axiosInstance.get('/api/v1/users/registerUser');
        return response.data;
    }
    catch(err){
        return err;
    }
}