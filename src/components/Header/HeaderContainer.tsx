import React from 'react';
import {Header} from "components/Header/Header";
import {RootStateType} from "redux/redux-store";
import {connect} from "react-redux";
import {setUsersDataAC} from "redux/auth-reducer";
import {authAPI, UserAuthType} from "api/auth-api";




export type HeaderContainerType = {
    setUsersData: (data: UserAuthType) => void
    data: UserAuthType| null
    isAuth:boolean
}

export class HeaderContainer extends React.Component<HeaderContainerType>{

    componentDidMount() {
            authAPI.authUser().then((data) => {
                this.props.setUsersData(data)
            });
    }
    render() {
        return (
            <Header {...this.props} />
        );
    }


};

const mapStateToProps = (state:RootStateType) =>({
    data: state.auth.data,
    isAuth: state.auth.isAuth
})



export default connect(mapStateToProps, {setUsersData:setUsersDataAC }) (HeaderContainer)