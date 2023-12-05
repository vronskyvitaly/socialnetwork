import React from 'react';
import {connect} from "react-redux";
import {RootStateType, StoreDispatch} from "redux/redux-store";
import {Dialogs} from "components/Dialogs/Dialogs";
import {sendMassageAC, updateNewMassageBodyAC} from "redux/dialogs-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "hoc/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = ( state: RootStateType ) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        valueInput: state.dialogsPage.newMassageBody,

    }
}

const mapDispatchToProps = ( dispatch: StoreDispatch ) => {
    return {
        sendMassage: ( value: string ) => {
            dispatch ( sendMassageAC ( value ) )
        },
        updateNewMassage: ( value: string ) => {
            dispatch ( updateNewMassageBodyAC ( value ) )
        }
    }
}



/*
// перед применением compose 70
const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthRedirectComponent));

export default DialogsContainer;
*/

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect, withRouter)(Dialogs)


