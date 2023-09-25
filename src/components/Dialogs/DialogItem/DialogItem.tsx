import React from "react";
import s from "components/Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const path:string = `/dialog/${props.id}`

    return (
        <div className={s.dialog}>
            <NavLink  to={path}>{props.name}</NavLink>
        </div>
    )
}