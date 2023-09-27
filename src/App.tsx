import React from 'react';
import './App.css';
import {Header} from "components/Header/Header";
import {Navbar} from "components/Navbar/Navbar";
import {Profile} from "components/Profile/Profile";
import {Dialogs} from "components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "redux/state";



type AppPropsType = {
    state:StateType
}


function App(props:AppPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    {/*<Route path={"/dialogs"} component={Dialogs}/>
                    <Route path={"/profile"} component={Profile}/>*/}
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
                                posts={props.state["profilePage"].posts}/>}
                    />

                </div>
            </div>
    )
}

export default App;

