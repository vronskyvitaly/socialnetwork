import {ActionTypes, DialogsDataType, MessagesDataType, StateType} from "redux/state";


type StateDialogs = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    newMassageBody: string
}

export const dialogsReducer = (state: StateDialogs, action: ActionTypes) => {

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
