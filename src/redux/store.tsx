

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
        newMassageBody: string
    }
}









/*
export type StoreType = {
    _state: StateType,
    _callSubscriber: (state:StateType) => void,

    getState:()=> StateType
    subscribe: (observer: () => void) => void

    dispatch: (action:ActionTypes) => void
}
*/


/*
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
        ],
        newMassageBody: ""
    }
},
    _callSubscriber(state:StateType){},

    getState (){
        return this._state
    },
    subscribe (observer:() => void) {
        this._callSubscriber = observer
    },


    dispatch (action)  {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)

    }

}
*/
