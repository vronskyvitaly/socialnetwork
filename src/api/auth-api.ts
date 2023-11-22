import axios from "axios";


const  instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/auth`,
        headers: {
            "API-KEY": "db9e3cd2-c07a-4ab2-ac3b-047c620e81a9"
        }
    }
)


export const authAPI = {

    authUser() {
        return instance.get<ResponseAuthUserType>(`/me`)
            .then(res=> res.data.data)
    },
}


export type ResponseAuthUserType = {
    data: UserAuthType
};

export type UserAuthType = {
    id: number | null ,
    login: any | null,
    email:any | null
}



