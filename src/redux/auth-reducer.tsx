


export type UserDataAuthType = {
    id: number | null,
    email: string | null,
    login: string | null
}


export type StateAuthType = {
    data: UserDataAuthType
    isAuth:boolean
}


let initialState:StateAuthType  = {
     data: {
         id: null,
         email: null,
         login:null
     },
    isAuth:false
    }


type ActionTypes  =
    | setUsersDataACType



export const authReducer = (state = initialState, action:ActionTypes):StateAuthType=> {

    switch (action.type) {
        case "SET-USERS-DATA":
            return {
                ...state,
                data: action.payload.data,
                isAuth: true
            }

        default: return state
    }

};




export type setUsersDataACType = ReturnType<typeof setUsersDataAC>
export const setUsersDataAC = (data:UserDataAuthType)=> {

    return {
        type: "SET-USERS-DATA",
        payload: {
            data
        }
    } as const
}


