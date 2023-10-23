import {ActionTypes, PostsDataType} from "redux/store";


export type StateProfilePageType = {
    posts: PostsDataType[]
    newPostsText: string
}


let initialState:StateProfilePageType  = {
        posts: [
            {id: 1, message: "One message"},
            {id: 2, message: "Two message"},
        ],
        newPostsText: ""
    }

export const profileReducer = (state = initialState, action:ActionTypes) => {

    switch (action.type) {
        case "ADD-POST":
            /*let newPost = {"id": new Date().getTime(), "message": state.newPostsText};
            state.posts.push(newPost)
            // первый способ очистить input после добавления
            state.newPostsText = ""
            return state*/

            let newPost = {id: new Date().getTime(), message: action.newPostText};
            return {...state,
                posts: [...state.posts, newPost],
            }


        case "UPDATE-NEW-POST-TEXT":
            state.newPostsText = action.payload.newText
            return state
        default: return state
    }

};


export type addPostACActionType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText:string)=> {
    return {
        type: 'ADD-POST',
        newPostText
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



