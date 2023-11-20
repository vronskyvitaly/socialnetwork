type locationType = {
    city: string,
    country: string
}


export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    status: string
    location: locationType
}


type StateUserType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage:number
}


let initialState: StateUserType = {
    users: [
        {
            id: 1,
            followed: true,
            name: "Vitaly",
            status: "status user",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 2,
            followed: false,
            name: "Dmitry",
            status: "status user",
            location: {city: "Minsk", country: "Belarus"}
        },
        {   id: 3,
            followed: true,
            name: "Vlad",
            status: "status user",
            location: {city: "Kiev", country: "Ukraine"}},
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1
}


type ActionTypes = changeFollowACType | setUsersACType | setCurrentPageACType | setUsersTotalCountACType


export const usersReducer = ( state = initialState, action: ActionTypes ): StateUserType => {

    switch (action.type) {
        case "CHANGE-FOLLOW":
            const userID = action.payload.userID;
            return {
                ...state,
                users: state.users.map ( user => user.id === userID
                    ? {...user, followed: action.payload.follow}
                    : user )
            }

        case "SET-CURRENT-PAGE":
            const currentPage = action.payload.currentPage;
            return {
                ...state,
                currentPage
            }

        case "SET-USERS-TOTAL-COUNT":
            const totalUsersCount = action.payload.totalUsersCount;
            return {
                ...state,
                totalUsersCount
            }


        case "SET-USERS":
            return {
                ...state,
                users: [ ...action.payload.users]
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



export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = ( currentPage:number ) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }

    } as const
}



export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
export const setUsersTotalCountAC = ( totalUsersCount:number ) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        payload: {
            totalUsersCount
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


