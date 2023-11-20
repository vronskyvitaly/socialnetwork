import React from 'react';
import {connect} from "react-redux";
import { RootStateType, StoreDispatch} from "redux/redux-store";
import {
   changeFollowAC,
   setCurrentPageAC,
   setUsersAC,
   setUsersTotalCountAC,
   UserType
} from "redux/users-reducer";
import axios from "axios";
import Users from "components/Users/Users";





type UsersContainerPropsType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage:number
   changeFollow:(userID:number, follow: boolean) =>void
   setUsers:(users:UserType[])=>void
   setCurrentPage:(pageNumber:number) => void
   setUsersTotalCount:(totalCount:number)=>void
}
type UserStateType = {};
export class UsersContainer extends React.Component <UsersContainerPropsType, UserStateType> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(( res) => {
         this.props.setUsers(res.data.items);
         this.props.setUsersTotalCount(res.data.totalCount)
      });
   }

   onPageChanged = (pageNumber:number) =>{
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(( res) => {
         this.props.setUsers(res.data.items);
      });
   }


   render() {
      return <Users users = {this.props.users}
                            totalUsersCount ={this.props.totalUsersCount}
                            pageSize = {this.props.pageSize}
                            onPageChanged = {this.onPageChanged}
                            changeFollow = {this.props.changeFollow}

   />}

}



const mapStateToProps = (state:RootStateType) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage:state.usersPage.currentPage
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
      setCurrentPage:(pageNumber:number) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setUsersTotalCount:(totalCount:number)=> {
         dispatch(setUsersTotalCountAC(totalCount))
      }

   }
}



export default connect (mapStateToProps,mapDispatchToProps)(UsersContainer)
