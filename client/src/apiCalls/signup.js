import { axiosInstance } from "./index";

export const signupData = async (formData) => {
  try {
    const response = await axiosInstance.post("/api/v1/users/registerUser", formData);
    return response.data;
  } catch (err) {
    return err.response?.data || { message: "Registration Failed" };
  }
};
