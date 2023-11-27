import {axiosInstance} from "api/axiosInstance";



export const authAPI = {

    authUser() {
        return axiosInstance.get<ResponseAuthUserType>(`auth/me`)
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



