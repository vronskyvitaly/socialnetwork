import React from 'react';
import {connect} from "react-redux";
import {Users} from "components/Users/Users";
import { RootStateType, StoreDispatch} from "redux/redux-store";
import {changeFollowAC, setUsersAC, UserType} from "redux/users-reducer";


const mapStateToProps = (state:RootStateType) => {
   return {
      users: state.usersPage.users
   }
}

const mapDispatchToProps = (dispatch:StoreDispatch) => {
   return {
      changeFollow:(userID:number, follow:boolean) => {
          dispatch(changeFollowAC(userID,follow))
       },
      setUsers:(users:UserType[]) => {
         dispatch(setUsersAC(users))
      },

   }
}



export default connect (mapStateToProps,mapDispatchToProps)(Users)
