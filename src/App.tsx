import React from 'react';
import './App.css';
import {Header} from "components/Header/Header";
import {Navbar} from "components/Navbar/Navbar";
import {Profile} from "components/Profile/Profile";
import {Dialogs} from "components/Dialogs/Dialogs";
import {Redirect, Route} from "react-router-dom";
import {ActionTypes, StateType} from "redux/state";






type AppPropsType = {
    state:StateType
    dispatch :(action:ActionTypes)=>void


}


function App(props:AppPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route exact path="/" render={() => <Redirect to="/profile" />} />
                    <Route
                        path={"/dialogs"}
                        render={()=>
                            <Dialogs
                                dialogs={props.state["dialogsPage"].dialogs}
                                messages={props.state["dialogsPage"].messages}/>}
                    />
                    <Route
                        path={"/profile"}
                        render={()=>
                            <Profile
                                posts={props.state["profilePage"].posts}
                                newPostsText = {props.state["profilePage"].newPostsText}
                                dispatch = {props.dispatch}
                            />}
                    />

                </div>
            </div>
    )
}

export default App;

