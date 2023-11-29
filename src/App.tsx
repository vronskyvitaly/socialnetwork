import React from 'react';
import './App.css';
import {Navbar} from "components/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import UsersContainer from "components/Users/UsersContainer";
import DialogsContainer from "components/Dialogs/DialogsContainer";
import ProfileContainer from "components/Profile/ProfileContainer";
import HeaderContainer from "components/Header/HeaderContainer";
import {Login} from "components/Login/Login";


function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar />
            <div className={"app-wrapper-content"}>
                <Route exact path="/" render={() => <Redirect to= "/profile" />} />
                <Route path="/profile/:id?" render={() => <ProfileContainer />} />
                <Route path="/users" component={()=> <UsersContainer/>} />
                <Route path="/dialogs" component={()=> <DialogsContainer/>} />
                <Route path="/login" component={()=> <Login/>} />
            </div>
        </div>
    )
}

export default App;