import React from 'react';
import {Profile} from "components/Profile/Profile";
import {connect} from "react-redux";
import {RootStateType} from "redux/redux-store";
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {GetProfileType} from "api/profile-api";
import {withAuthRedirect} from "hoc/AuthRedirect";
import {compose} from "redux";


export type ProfileContainerType = {
    getUserProfileTC: ( userId: string ) => void
    getUserStatusTC: ( userId: string ) => void
    updateUserStatusTC: (newStatus:string) =>void
    profile: GetProfileType | null
    isAuth: boolean
    status: string
}

class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<{ id: string }>> {

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfileTC ( userId )
        this.props.getUserStatusTC (userId)


    }

    render() {
        return (<Profile {...this.props}  />);
    }
}


const mapStateToProps = ( state: RootStateType ) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


/*
 // перед применением compose 70
const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let withUrlDataContainerComponent = withRouter ( AuthRedirectComponent )
export default connect ( mapStateToProps, {getUserProfileTC} ) ( withUrlDataContainerComponent )
*/


export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC}), withAuthRedirect, withRouter)(ProfileContainer)

