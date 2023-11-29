import React from 'react';
import {Profile} from "components/Profile/Profile";
import {connect} from "react-redux";
import {RootStateType} from "redux/redux-store";
import {getUserProfileTC} from "redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {GetProfileType} from "api/profile-api";
import {withAuthRedirect} from "hoc/AuthRedirect";


export type ProfileContainerType = {
    getUserProfileTC: ( userId: string ) => void
    profile: GetProfileType | null
    isAuth: boolean
}

class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<{ id: string }>> {

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) {
            userId = "2"
        }

        this.props.getUserProfileTC ( userId )
    }

    render() {
        return (<Profile {...this.props} />);
    }
}


const mapStateToProps = ( state: RootStateType ) => ({
    profile: state.profilePage.profile,
})


const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let withUrlDataContainerComponent = withRouter ( AuthRedirectComponent )
export default connect ( mapStateToProps, {getUserProfileTC} ) ( withUrlDataContainerComponent )

