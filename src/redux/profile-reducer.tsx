import {ActionTypes, PostsDataType} from "redux/state";


type StateProfile = {
    posts: PostsDataType[]
    newPostsText: string
}

export const profileReducer = (state:StateProfile, action:ActionTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {"id": new Date().getTime(), "message": state.newPostsText};
            state.posts.push(newPost)
            // первый способ очистить input после добавления
            state.newPostsText = ""
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostsText = action.payload.newText
            return state
        default: return state
    }

};


export type addPostACActionType = ReturnType<typeof addPostAC>
export const addPostAC = ()=> {
    return {
        type: 'ADD-POST',
    } as const
}


export type updateNewPostTextACActionType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newText:string)=> {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText
        }
    } as const
}



