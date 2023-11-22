import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RootStateType} from 'redux/redux-store';
import {
    changeFollowAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
} from 'redux/users-reducer';
import Users from 'components/Users/Users';
import {Preloader} from 'components/common/Preloader/Preloader';
import {usersAPI, UserType} from "api/users-api";

type UsersContainerPropsType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    changeFollow: ( userID: number, follow: boolean ) => void;
    setUsers: ( users: UserType[] ) => void;
    setCurrentPage: ( pageNumber: number ) => void;
    setUsersTotalCount: ( totalCount: number ) => void;
    toggleIsFetching: ( fetching: boolean ) => void;
    isFetching: boolean;
};

type UsersContainerStateType = {};

class UsersContainer extends Component<UsersContainerPropsType, UsersContainerStateType> {
    componentDidMount() {
        this.props.toggleIsFetching ( true );

        usersAPI.getUsers ( this.props.currentPage, this.props.pageSize )
            .then ( ( data ) => {
                this.props.setUsers ( data.items );
                this.props.setUsersTotalCount ( data.totalCount );
                this.props.toggleIsFetching ( false );
            } );
    }

    onPageChanged = ( pageNumber: number ) => {
        this.props.setCurrentPage ( pageNumber );
        this.props.toggleIsFetching ( true );

        usersAPI.getUsers ( pageNumber, this.props.pageSize )
            .then ( ( data ) => {
                this.props.setUsers ( data.items );
                this.props.toggleIsFetching ( false );
            } );
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader/>
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

const mapStateToProps = ( state: RootStateType ) => {
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


export default connect ( mapStateToProps, {
    changeFollow: changeFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setUsersTotalCount: setUsersTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC

} ) ( UsersContainer );
