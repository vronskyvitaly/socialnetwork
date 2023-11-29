import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStateType} from "redux/redux-store";
import {connect} from "react-redux";


/*
type PropsType = {
    isAuth: boolean;
};

const mapStateToProps = ( state: RootStateType ) => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: React.ComponentType<T & PropsType>) {
    class RedirectComponent extends React.Component<T & PropsType> {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={"/login"} />
            }

            return <Component {...this.props} />
        }
    };



    // @ts-ignore
    let  ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectAuthRedirectComponent

}
*/


type MapStateToProps = {
    isAuth: boolean
}

const MapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = <T,>(Component: ComponentType<T> ) => {

    const RedirectComponent = (props: MapStateToProps) => {
        const {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T} />
    }

    return connect(MapStateToProps)(RedirectComponent)
}
