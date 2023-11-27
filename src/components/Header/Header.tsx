import React from 'react';
import  s from 'components/Header/Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderContainerType} from "components/Header/HeaderContainer";

export const Header = (props:HeaderContainerType) => {

    return (
        <header className={s.header}>
            <p className={s.logo}>Сетка</p>
            <div className={s.loginBlock}>
                {props.isAuth
                    ?<p style={{color:"white"}}>{props.data?.email}</p>
                    : <NavLink className={(isActive)=> isActive ? s.active : s.link} to={"/login"}>LOGIN</NavLink>

                }
            </div>
        </header>
    );
};

