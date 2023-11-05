import React from "react";
import s from "components/Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const path:string = `/dialogs/${props.id}`

    return (
        <div className={s.dialog_link}>
            <NavLink activeClassName={s.active} to={path} > {props.name} </NavLink>
        </div>
    )
}