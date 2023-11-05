import { DialogsDataType, MessagesDataType} from "redux/store";



export type StateDialogsPageType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    newMassageBody: string
}


let initialState:StateDialogsPageType = {
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


type ActionTypes  = updateNewMassageBodyACType | sendMassageACType

export const dialogsReducer = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case "UPDATE-NEW-MASSAGE-BODY":
            return {
                ...state,
                newMassageBody: action.valueInput
            }
        case "SEND-MESSAGE":
            let message = {id: new Date().getTime(), message: action.messageBody}
            return {...state,
                messages: [...state.messages, message],
                newMassageBody: ""
            }
        default: return state
    }
};



export type updateNewMassageBodyACType = ReturnType<typeof updateNewMassageBodyAC>
export const updateNewMassageBodyAC = (valueInput:string)=> {
    return {
        type: "UPDATE-NEW-MASSAGE-BODY",
        valueInput
    } as const
}


export type sendMassageACType = ReturnType<typeof sendMassageAC>
export const sendMassageAC = (messageBody:string)=> {
    return {
        type: "SEND-MESSAGE",
        messageBody
    } as const
}
