import { axiosInstance } from "./index";

export const loginData = async (formData) => {
  try {
    const response = await axiosInstance.post("/api/v1/users/login", formData);
    return response.data;
  } catch (err) {
    return err.response?.data || { message: "Login Failed" };
  }
};
