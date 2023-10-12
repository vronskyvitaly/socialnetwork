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






export type ActionTypes =
    addPostACActionType
    | updateNewPostTextACActionType
    | updateNewMassageBodyACActionType
    | sendMassageACActionType


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


export type updateNewMassageBodyACActionType = ReturnType<typeof updateNewMassageBodyAC>
export const updateNewMassageBodyAC = (newMassageBody:string)=> {
    return {
        type: "UPDATE-NEW-MASSAGE-BODY",
        newMassageBody
    } as const
}


export type sendMassageACActionType = ReturnType<typeof sendMassageAC>
export const sendMassageAC = ()=> {
    return {
        type: "SEND-MESSAGE",
    } as const
}



export type StoreType = {
    _state: StateType,
    _callSubscriber: (state:StateType) => void,

    getState:()=> StateType
    subscribe: (observer: () => void) => void

    dispatch: (action:ActionTypes) => void
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
       if (action.type === "ADD-POST"){
           let newPost = {id: new Date().getTime(), message: this._state.profilePage.newPostsText};
           this._state.profilePage.posts.push(newPost)
           // первый способ очистить input после добавления
           this._state.profilePage.newPostsText = ""
           /*
           // второй способ очистить input после добавления
           state.profilePage.newPostsText = ""
           */
           this._callSubscriber(this._state)
       } else if (action.type === "UPDATE-NEW-POST-TEXT") {
           this._state.profilePage.newPostsText = action.payload.newText
           this._callSubscriber(this._state)
       } else if (action.type === "UPDATE-NEW-MASSAGE-BODY"){
           this._state.dialogsPage.newMassageBody = action.newMassageBody
           this._callSubscriber(this._state)
       } else if (action.type === "SEND-MESSAGE"){
           let body = this._state.dialogsPage.newMassageBody;
           this._state.dialogsPage.newMassageBody = ""
           this._state.dialogsPage.messages.push({id: 6, message: body})
           this._callSubscriber(this._state)
       }
    }

}
