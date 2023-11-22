import React from 'react';
import {Header} from "components/Header/Header";
import axios from "axios";
import {RootStateType} from "redux/redux-store";
import {connect} from "react-redux";
import {setUsersDataAC, StateAuthType, UserDataAuthType} from "redux/auth-reducer";




export type HeaderContainerType = {
    setUsersData: (data: UserDataAuthType) => void
    data: UserDataAuthType | null
    isAuth:boolean
}

export class HeaderContainer extends React.Component<HeaderContainerType>{

    componentDidMount() {
        axios
            .get<StateAuthType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
            .then((res) => {
                this.props.setUsersData(res.data.data)
            });
    }
    render() {
        return (
            <Header {...this.props} />
        );
    }


};

const mapStateToProps = (state:RootStateType) =>({
    data: state.authPage.data,
    isAuth: state.authPage.isAuth
})



export default connect(mapStateToProps, {setUsersData:setUsersDataAC }) (HeaderContainer)