import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RootStateType} from 'redux/redux-store';
import {followTC, getUsersTC, setCurrentPageAC, toggleIsFetchingProgressAC, upFollowTC,} from 'redux/users-reducer';
import Users from 'components/Users/Users';
import {Preloader} from 'components/common/Preloader/Preloader';
import {UserType} from "api/users-api";

type UsersContainerPropsType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    toggleIsFetchingProgress: ( fetching: boolean , userID: number) => void;
    followingInProgress: number[]
    isFetching: boolean;
    getUsersTC : (currentPage:number, pageSize: number) => void
    upFollowTC : (userID:number)=>void
    followTC : (userID:number)=>void
};

type UsersContainerStateType = {};

class UsersContainer extends Component<UsersContainerPropsType & UsersContainerStateType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize )
    }

    onPageChanged = ( pageNumber: number ) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize )
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
                        followingInProgress = {this.props.followingInProgress}
                        upFollowTC = {this.props.upFollowTC}
                        followTC = {this.props.followTC}

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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};



export default connect ( mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    toggleIsFetchingProgress: toggleIsFetchingProgressAC,
    getUsersTC,
    followTC,
    upFollowTC

} ) ( UsersContainer );



/*
const AuthRedirectComponent = withAuthRedirect(UsersContainer);

export default connect ( mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    toggleIsFetchingProgress: toggleIsFetchingProgressAC,
    getUsersTC,
    followTC,
    upFollowTC

} ) (withRouter(AuthRedirectComponent)  );
*/
