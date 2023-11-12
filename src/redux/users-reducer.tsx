type locationType = {
    city: string,
    country: string
}


export type UserType = {
    id: number,
    followed: boolean,
    fullNane: string,
    status: string
    location: locationType
}


type StateUserType = {
    users: UserType[]
}


let initialState: StateUserType = {
    users: [
        {
            id: 1,
            followed: true,
            fullNane: "Vitaly",
            status: "status user",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 2,
            followed: false,
            fullNane: "Dmitry",
            status: "status user",
            location: {city: "Minsk", country: "Belarus"}
        },
        {   id: 3,
            followed: true,
            fullNane: "Vlad",
            status: "status user",
            location: {city: "Kiev", country: "Ukraine"}},
    ],
}


type ActionTypes = changeFollowACType | setUsersACType


export const usersReducer = ( state = initialState, action: ActionTypes ): StateUserType => {

    switch (action.type) {
        case "CHANGE-FOLLOW":
            return {
                ...state,
                users: state.users.map ( user => user.id === action.payload.userID
                    ? {...user, followed: action.payload.follow}
                    : user )
            }

        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.payload.users]
            }
        default:
            return state
    }

};


export type changeFollowACType = ReturnType<typeof changeFollowAC>
export const changeFollowAC = ( userID: number, follow:boolean ) => {
    return {
        type: 'CHANGE-FOLLOW',
        payload: {
            userID,
            follow
        }

    } as const
}




export type setUsersACType = ReturnType<typeof setUsersAC>

// todo: после запроса на сервер
export const setUsersAC = ( users: UserType[] ) => {
    return {
        type: "SET-USERS",
        payload: {
           users
        }
    } as const
}


