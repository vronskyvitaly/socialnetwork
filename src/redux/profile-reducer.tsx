import {PostsDataType} from "redux/store";
import {GetProfileType, profileAPI} from "api/profile-api";
import {Dispatch} from "redux";


export type StateProfilePageType = {
    posts: PostsDataType[]
    newPostsText: string
    profile: GetProfileType | null
    status: string
}


let initialState: StateProfilePageType = {
    posts: [
        {id: 1, message: "One message"},
        {id: 2, message: "Two message"},
    ],
    newPostsText: "",
    profile: null,
    status: ""
}


export type ProfileReducerActionTypes =
    | addPostACType
    | updateNewPostTextACType
    | setUsersProfileACType
    | setUserStatusACType


export const profileReducer = ( state = initialState, action: ProfileReducerActionTypes ): StateProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: new Date ().getTime (), message: action.newPostText};
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostsText: ""
            }

        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostsText: action.payload.newText
            }

        case "SET-USERS-PROFILE":
            return {
                ...state, profile: action.payload.profile
            }

        case "SET-USER-STATUS":
            return {
                ...state, status: action.payload.newStatus
            }

        default:
            return state
    }

};


export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = ( newPostText: string ) => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
}


export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = ( newText: string ) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText
        }
    } as const
}


export type setUsersProfileACType = ReturnType<typeof setUsersProfileAC>
export const setUsersProfileAC = ( profile: GetProfileType ) => {
    return {
        type: "SET-USERS-PROFILE",
        payload: {
            profile
        }
    } as const
}


export type setUserStatusACType = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = ( newStatus: string) => {
    return {
        type: "SET-USER-STATUS",
        payload: {
            newStatus
        }
    } as const
}



export const getUserProfileTC = (userId:string) => (dispatsh:Dispatch) => {
    profileAPI.getProfileUser(userId)
        .then((data) => {
            dispatsh(setUsersProfileAC(data))
        });
}


export const getUserStatusTC = (userId:string) => (dispatsh:Dispatch) => {
    profileAPI.getStatusUser(userId)
        .then((data) => {
            dispatsh(setUserStatusAC(data))
        });
}


export const updateUserStatusTC = (newStatus:string) => (dispatsh:Dispatch) => {
    profileAPI.updateStatusUser(newStatus)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatsh(setUserStatusAC(newStatus))
            }
        });
}

