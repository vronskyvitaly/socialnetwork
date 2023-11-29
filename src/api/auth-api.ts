import {axiosInstance} from "api/axiosInstance";


export const authAPI = {

    authUser() {
        return axiosInstance.get<ResponseAuthType>(`auth/me`)

    },
}


export type UserAuthType = {
    id: number | null ,
    login: any | null,
    email:any | null
}

export type ResponseAuthType = {
    data: UserAuthType
    resultCode: number
    messages: string[]
}



