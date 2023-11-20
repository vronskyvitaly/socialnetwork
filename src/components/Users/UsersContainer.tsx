import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootStateType} from 'redux/redux-store';
import {
   changeFollowAC,
   setCurrentPageAC,
   setUsersAC,
   setUsersTotalCountAC,
   toggleIsFetchingAC,
   UserType
} from 'redux/users-reducer';
import axios from 'axios';
import Users from 'components/Users/Users';

import { Preloader } from 'components/common/Preloader/Preloader';

type UsersContainerPropsType = {
   users: UserType[];
   pageSize: number;
   totalUsersCount: number;
   currentPage: number;
   changeFollow: (userID: number, follow: boolean) => void;
   setUsers: (users: UserType[]) => void;
   setCurrentPage: (pageNumber: number) => void;
   setUsersTotalCount: (totalCount: number) => void;
   toggleIsFetching: (fetching: boolean) => void;
   isFetching: boolean;
};

type UsersContainerStateType = {};

class UsersContainer extends Component<UsersContainerPropsType, UsersContainerStateType> {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios
          .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then((res) => {
             this.props.setUsers(res.data.items);
             this.props.setUsersTotalCount(res.data.totalCount);
             this.props.toggleIsFetching(false);
          });
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios
          .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
          .then((res) => {
             this.props.setUsers(res.data.items);
             this.props.toggleIsFetching(false);
          });
   };

   render() {
      return (
          <>
             {this.props.isFetching ? (
                 <Preloader />
             ) : (
                 <Users
                     users={this.props.users}
                     totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     onPageChanged={this.onPageChanged}
                     changeFollow={this.props.changeFollow}
                 />
             )}
          </>
      );
   }
}

const mapStateToProps = (state: RootStateType) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   };
};

/*  // в 58 уроке передал как объект
   const mapDispatchToProps = (dispatch: StoreDispatch) => {
   return {
      changeFollow: (userID: number, follow: boolean) => {
         dispatch(changeFollowAC(userID, follow));
      },
      setUsers: (users: UserType[]) => {
         dispatch(setUsersAC(users));
      },
      setCurrentPage: (pageNumber: number) => {
         dispatch(setCurrentPageAC(pageNumber));
      },
      setUsersTotalCount: (totalCount: number) => {
         dispatch(setUsersTotalCountAC(totalCount));
      },
      toggleIsFetching: (fetching: boolean) => {
         dispatch(toggleIsFetchingAC(fetching));
      }
   };
};*/


export default connect(mapStateToProps,{
   changeFollow: changeFollowAC,
   setUsers:setUsersAC,
   setCurrentPage:setCurrentPageAC,
   setUsersTotalCount:setUsersTotalCountAC,
   toggleIsFetching:toggleIsFetchingAC

})(UsersContainer);
