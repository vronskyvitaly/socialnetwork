import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RootStateType} from 'redux/redux-store';
import {followTC, getUsersTC, setCurrentPageAC, toggleIsFetchingProgressAC, upFollowTC,} from 'redux/users-reducer';
import Users from 'components/Users/Users';
import {Preloader} from 'components/common/Preloader/Preloader';
import {UserType} from "api/users-api";
import {compose} from "redux";
import {withAuthRedirect} from "hoc/AuthRedirect";
import {withRouter} from "react-router-dom";

type UsersContainerPropsType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    toggleIsFetchingProgressAC: ( fetching: boolean, userID: number ) => void;
    followingInProgress: number[]
    isFetching: boolean;
    getUsersTC: ( currentPage: number, pageSize: number ) => void
    upFollowTC: ( userID: number ) => void
    followTC: ( userID: number ) => void
};

type UsersContainerStateType = {};

class UsersContainer extends Component<UsersContainerPropsType & UsersContainerStateType> {
    componentDidMount() {
        this.props.getUsersTC ( this.props.currentPage, this.props.pageSize )
    }

    onPageChanged = ( pageNumber: number ) => {
        this.props.getUsersTC ( pageNumber, this.props.pageSize )
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
                        followingInProgress={this.props.followingInProgress}
                        upFollowTC={this.props.upFollowTC}
                        followTC={this.props.followTC}

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


/*
 // перед применением compose 70
 export default connect ( mapStateToProps, {
 setCurrentPage: setCurrentPageAC,
 toggleIsFetchingProgress: toggleIsFetchingProgressAC,
 getUsersTC,
 followTC,
 upFollowTC

 } ) ( UsersContainer );
 */

export default compose<React.ComponentType> ( connect ( mapStateToProps, {
    setCurrentPageAC, // ?
    toggleIsFetchingProgressAC, // ?
    getUsersTC,
    followTC,
    upFollowTC

} ), withAuthRedirect, withRouter ) ( UsersContainer )



