// import axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL : "https://localhost:5000/api",
//     withCredentials:true,
    
// })
import axios from "axios";
const BASE_UEL = import.meta.env.MODE === "development"?"https://localhost:5000/api":"/api"
export const axiosInstance = axios.create({
  baseURL: BASE_UEL,
  withCredentials: true,
});
