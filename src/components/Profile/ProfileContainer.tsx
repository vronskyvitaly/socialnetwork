import React from 'react';
import {Profile} from "components/Profile/Profile";
import {connect} from "react-redux";
import {RootStateType} from "redux/redux-store";
import {setUsersProfileAC} from "redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {GetProfileType, profileAPI} from "api/profile-api";




export type ProfileContainerType = {
    setUserProfile: (profile: GetProfileType) => void
    profile: GetProfileType | null
}

class ProfileContainer  extends React.Component<ProfileContainerType & RouteComponentProps<{id:string}> >{

    componentDidMount() {
        let userId = this.props.match.params.id;
        if(!userId){
            userId = "2"
        }

        profileAPI.getProfileUser(userId)
            .then((data) => {
               this.props.setUserProfile(data)
            });
    }

    render() {
        return (<Profile {...this.props} />);
    }
}



const mapStateToProps = (state:RootStateType) =>({
  profile: state.profilePage.profile
})

 let withUrlDataContainerComponent = withRouter(ProfileContainer)
 export default connect(mapStateToProps, {setUserProfile:setUsersProfileAC}) (withUrlDataContainerComponent)

