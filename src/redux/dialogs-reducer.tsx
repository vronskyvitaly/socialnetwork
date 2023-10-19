import {ActionTypes, DialogsDataType, MessagesDataType, StateType} from "redux/store";


export type StateDialogs = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    newMassageBody: string
}


let initialState:StateDialogs = {
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

export const dialogsReducer = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case "UPDATE-NEW-MASSAGE-BODY":
            state.newMassageBody = action.newMassageBody
            return state
        case "SEND-MESSAGE":
            let body = state.newMassageBody;
            state.newMassageBody = ""
            state.messages.push({id: 6, message: body})
            return state
        default: return state
    }
};



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
