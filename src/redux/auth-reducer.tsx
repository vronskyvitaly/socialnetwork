import {UserAuthType} from "api/auth-api";


export type StateAuthType = {
    data: UserAuthType
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
    | ReturnType<typeof setUsersDataAC>



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

export const setUsersDataAC = (data:UserAuthType)=> ({
        type: "SET-USERS-DATA" as const,
        payload: {
            data
        }
})


