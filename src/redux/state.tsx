import {renderEntireTree} from "render";


export type PostsDataType = {
    id: number
    message: string
}


export type DialogsDataType = {
    id: number
    name: string
}


export type MessagesDataType = {
    id: number
    message: string
}


export type StateType = {
    profilePage: {
        posts: PostsDataType[]
        newPostsText: string

    }
    dialogsPage: {
        dialogs: DialogsDataType[]
        messages: MessagesDataType[]
    }

}

export const state: StateType = {

    profilePage: {
        posts: [
            {id: 1, message: "One message"},
            {id: 2, message: "Two message"},
        ],
        newPostsText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Виталий"},
            {id: 2, name: "Влад"},
            {id: 3, name: "Саша"},
            {id: 4, name: "Артем"},
        ],
        messages: [
            {id: 1, message: "Привет как дела?"},
            {id: 2, message: "Что делаешь"},
            {id: 3, message: "Завтра встретимся?"},
        ]
    }
}

export const addPost = () => {
    let newPost = {id: new Date().getTime(), message: state.profilePage.newPostsText};
    state.profilePage.posts.push(newPost)
    // первый способ очистить input после добавления
    updateNewPostText("")
    /*
    // второй способ очистить input после добавления
    state.profilePage.newPostsText = ""
    */
    renderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostsText = newText
    renderEntireTree(state)
}