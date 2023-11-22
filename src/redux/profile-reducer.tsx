import {PostsDataType} from "redux/store";
import {GetProfileType} from "api/profile-api";


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


type ActionTypes =
    | addPostACType
    | updateNewPostTextACType
    | setUsersProfileACType


export const profileReducer = ( state = initialState, action: ActionTypes ): StateProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            /*
             let newPost = {"id": new Date().getTime(), "message": state.newPostsText};
             state.posts.push(newPost)
             // первый способ очистить input после добавления
             state.newPostsText = ""
             return state
             */

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


