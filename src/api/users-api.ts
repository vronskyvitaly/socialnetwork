import axios from "axios";
import {axiosInstance} from "api/axiosInstance";



export const usersAPI = {

    getUsers(currentPage:number, pageSize:number) {
        return axiosInstance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res=> res.data)
    },

    upFollowedUser(id:number) {
        return axiosInstance.delete(`follow/${id}`)
            .then(res=>res.data)
    },

    followedUser(id:number) {
        return axiosInstance.post(`follow/${id}`, {})
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

