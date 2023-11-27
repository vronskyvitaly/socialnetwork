import {usersAPI, UserType} from "api/users-api";
import {AppThunk} from "redux/redux-store";


type StateUserType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


let initialState: StateUserType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export type UserReducerActionTypes =
    | changeFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setUsersTotalCountACType
    | toggleIsFetchingACType
    | toggleIsFetchingProgressACType


export const usersReducer = ( state = initialState, action: UserReducerActionTypes ): StateUserType => {

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

        case "TOGGLE-IS-FETCHING" :
            return {...state, isFetching: action.payload.isFetching}

        case "TOGGLE-IS-FETCHING-PROGRESS" :
            return {...state, followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userID]
                    : state.followingInProgress.filter(id=> id !== action.payload.userID)
            }

        case "SET-USERS":
            return {
                ...state,
                users: [...action.payload.users]
            }
        default:
            return state
    }

};


export type changeFollowACType = ReturnType<typeof changeFollowAC>
export const changeFollowAC = ( userID: number, follow: boolean ) => {
    return {
        type: 'CHANGE-FOLLOW',
        payload: {
            userID,
            follow
        }

    } as const
}


export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = ( currentPage: number ) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }

    } as const
}


export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
export const setUsersTotalCountAC = ( totalUsersCount: number ) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        payload: {
            totalUsersCount
        }

    } as const
}


export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = ( isFetching: boolean ) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }

    } as const
}


export type toggleIsFetchingProgressACType = ReturnType<typeof toggleIsFetchingProgressAC >
export const toggleIsFetchingProgressAC = ( isFetching: boolean, userID: number ) => {
    return {
        type: 'TOGGLE-IS-FETCHING-PROGRESS',
        payload: {
            isFetching,
            userID
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


export const getUsersTC = (currentPage:number, pageSize: number):AppThunk => (dispatsh) => {
    dispatsh(toggleIsFetchingAC ( true ))

    usersAPI.getUsers ( currentPage, pageSize )
        .then ( ( data ) => {
            dispatsh(toggleIsFetchingAC ( false ))
            dispatsh(setUsersAC ( data.items ))
            dispatsh (setUsersTotalCountAC ( data.totalCount ))
        } );
}


export const followTC = (userID:number):AppThunk => (dispatsh) => {
    dispatsh(toggleIsFetchingProgressAC(true, userID))
    usersAPI.followedUser(userID)
        .then((data) => {
            if (data.resultCode == 0 ){
                // todo: del
                console.log ("Подписался")
                dispatsh(changeFollowAC(userID, true))
            }
            dispatsh(toggleIsFetchingProgressAC(false, userID))
        });
}


export const upFollowTC = (userID:number):AppThunk => (dispatsh) => {
    dispatsh(toggleIsFetchingProgressAC(true, userID))
    usersAPI.upFollowedUser(userID)
        .then((data) => {
            if (data.resultCode == 0 ){
                // todo: del
                console.log ("Одписался")
                dispatsh(changeFollowAC(userID, false))
            }
            dispatsh(toggleIsFetchingProgressAC(false, userID))
        });
}


