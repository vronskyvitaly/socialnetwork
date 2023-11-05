import { PostsDataType} from "redux/store";


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


type ActionTypes  = addPostACType | updateNewPostTextACType



export const profileReducer = (state = initialState, action:ActionTypes):StateProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            /*
            let newPost = {"id": new Date().getTime(), "message": state.newPostsText};
            state.posts.push(newPost)
            // первый способ очистить input после добавления
            state.newPostsText = ""
            return state
            */

            let newPost = {id: new Date().getTime(), message: action.newPostText};
            return {...state,
                posts: [newPost, ...state.posts],
                newPostsText:""
            }

        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostsText: action.payload.newText
            }
        default: return state
    }

};


export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText:string)=> {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
}


export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newText:string)=> {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText
        }
    } as const
}



