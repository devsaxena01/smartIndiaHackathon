import { axiosInstance } from "./index";

export const signupData = async (formData) => {
  try {
    const response = await axiosInstance.post("/api/v1/users/registerUser", formData);
    return {
      success: true,
      ...response.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Registration Failed",
    };
  }
};
