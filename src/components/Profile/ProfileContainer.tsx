import React from 'react';
import {Profile} from "components/Profile/Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "redux/redux-store";
import {setUsersProfileAC} from "redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


export type GetProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos: PhotoType
}

export type ContactType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type PhotoType = {
    small: string | null
    large: string
}


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
        axios
            .get<GetProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
               this.props.setUserProfile(res.data)
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

