import axios from "axios";

export const  axiosInstance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "db9e3cd2-c07a-4ab2-ac3b-047c620e81a9"
        }
    }
)