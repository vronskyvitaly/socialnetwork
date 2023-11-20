import React from 'react';
import './App.css';
import { Header } from "components/Header/Header";
import { Navbar } from "components/Navbar/Navbar";

import { Redirect, Route } from "react-router-dom";
import UsersContainer from "components/Users/UsersContainer";
import DialogsContainer from "components/Dialogs/DialogsContainer";
import ProfileContainer from "components/Profile/ProfileContainer";



/*
type AppPropsType = {
    state:StateType
    dispatch:(action:ActionTypes)=>void
    store:StoreType
}
*/

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className={"app-wrapper-content"}>
                <Route exact path="/" render={() => <Redirect to= "/profile" />} />
                <Route path="/profile" render={() => <ProfileContainer />} />
                <Route path="/users" component={()=> <UsersContainer/>} />
                <Route path="/dialogs" component={()=> <DialogsContainer/>} />
            </div>
        </div>
    )
}

export default App;