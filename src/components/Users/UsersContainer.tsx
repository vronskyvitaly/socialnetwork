import React from 'react';
import {connect} from "react-redux";
import {Users} from "components/Users/Users";
import { RootStateType, StoreDispatch} from "redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "redux/users-reducer";


const mapStateToProps = (state:RootStateType) => {
   return {
      users: state.usersPage.users
   }
}

const mapDispatchToProps = (dispatch:StoreDispatch) => {
   return {
       follow:(userID:number) => {
          dispatch(followAC(userID))
       },
      unfollow:(userID:number) => {
         dispatch(unfollowAC(userID))
      },
      setUsers:(users:UserType[]) => {
         dispatch(setUsersAC(users))
      },

   }
}



export default connect (mapStateToProps,mapDispatchToProps)(Users)
