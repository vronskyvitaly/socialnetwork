import React from 'react';
import './App.css';
import { Header } from "components/Header/Header";
import { Navbar } from "components/Navbar/Navbar";
import { Profile } from "components/Profile/Profile";
import { Redirect, Route } from "react-router-dom";
import UsersContainer from "components/Users/UsersContainer";
import DialogsContainer from "components/Dialogs/DialogsContainer";


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
                <Route path="/dialogs" component={()=> <DialogsContainer/>} />
                <Route path="/profile" component={Profile} />
                <Route path="/users" component={()=><UsersContainer/>} />
            </div>
        </div>
    )
}

export default App;