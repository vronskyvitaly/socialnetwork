import axios from "axios";


const  instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/profile`,
        headers: {
            "API-KEY": "db9e3cd2-c07a-4ab2-ac3b-047c620e81a9"
        }
    }
)

export const profileAPI = {
    getProfileUser(userId:string) {
        return instance.get<GetProfileType>(`/${userId}`)
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



