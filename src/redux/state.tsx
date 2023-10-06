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

export type StoreType = {
    _state: StateType,
    getState:()=> StateType
    _callSubscriber: (state:StateType) => void,
    addPost: () => void,
    updateNewPostText: (newText: string) => void,
    subscribe: (observer: () => void) => void
}




export const store:StoreType = {
    _state: {
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
},
    getState (){
        return this._state
    },
    _callSubscriber(state:StateType){},
    addPost ()  {
        let newPost = {id: new Date().getTime(), message: this._state.profilePage.newPostsText};
        this._state.profilePage.posts.push(newPost)
        // первый способ очистить input после добавления
        this.updateNewPostText("")
        /*
        // второй способ очистить input после добавления
        state.profilePage.newPostsText = ""
        */
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostsText = newText
        this._callSubscriber(this._state)
    },
    subscribe (observer:()=>void) {
        this._callSubscriber = observer
    }
}
