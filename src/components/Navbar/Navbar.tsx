import React from 'react';
import s from 'components/Navbar/Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to ="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <a  className={s.link} href={"#!"}>News</a>
            </div>
            <div className={s.item}>
                <a className={s.link}  href={"#!"}>Music</a>
            </div>
            <div className={`${s.item} ${s.item_setting}`}>
                <a className={s.link} href={"#!"}>Settings</a>
            </div>
        </nav>
    );
};

