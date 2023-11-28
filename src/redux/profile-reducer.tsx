import {PostsDataType} from "redux/store";
import {GetProfileType, profileAPI} from "api/profile-api";
import {Dispatch} from "redux";


export type StateProfilePageType = {
    posts: PostsDataType[]
    newPostsText: string
    profile: GetProfileType | null
}


let initialState: StateProfilePageType = {
    posts: [
        {id: 1, message: "One message"},
        {id: 2, message: "Two message"},
    ],
    newPostsText: "",
    profile: null
}


export type ProfileReducerActionTypes =
    | addPostACType
    | updateNewPostTextACType
    | setUsersProfileACType


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


export const getUserProfileTC = (userId:string) => (dispatsh:Dispatch) => {
    profileAPI.getProfileUser(userId)
        .then((data) => {
            dispatsh(setUsersProfileAC(data))
        });
}

