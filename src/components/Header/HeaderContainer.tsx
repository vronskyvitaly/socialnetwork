import React from 'react';
import {Header} from "components/Header/Header";
import {RootStateType} from "redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "redux/auth-reducer";
import {UserAuthType} from "api/auth-api";


export type HeaderContainerType = {
    getAuthUserDataTC: () => void
    data: UserAuthType | null
    isAuth: boolean
}

export class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserDataTC ()
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = ( state: RootStateType ) => ({
    data: state.auth.data,
    isAuth: state.auth.isAuth
})


export default connect ( mapStateToProps, {getAuthUserDataTC} ) ( HeaderContainer )