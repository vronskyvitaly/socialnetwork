import axios from "axios";
import {axiosInstance} from "api/axiosInstance";


export const profileAPI = {
    getProfileUser(userId:string) {
        return axiosInstance.get<GetProfileType>(`profile/${userId}`)
            .then(res=> res.data)

    },
}




export type GetProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos: PhotoType
}

export type ContactType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type PhotoType = {
    small: string | null
    large: string
}



