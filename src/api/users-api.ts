import axios from "axios";


const  instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0`,
        headers: {
            "API-KEY": "db9e3cd2-c07a-4ab2-ac3b-047c620e81a9"
        }
    }
)


export const usersAPI = {

    getUsers(currentPage:number, pageSize:number) {
        return instance.get<GetUsersResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
            .then(res=> res.data)
    },

    upFollowedUser(id:number) {
        return instance.delete(`/follow/${id}`)
            .then(res=>res.data)
    },

    followedUser(id:number) {
        return instance.post(`/follow/${id}`, {})
            .then(res=> res.data)
    }
}


export type UserType = {
    name: string;
    id: number;
    photos: PhotosType;
    status?: string | null ;
    followed: boolean;
    uniqueUrlName?: string | null
};

export type PhotosType = {
    small: string | null;
    large: string | null;
};

export type GetUsersResponseType = {
    items: UserType[];
    totalCount: number;
    error: string | null;
};

