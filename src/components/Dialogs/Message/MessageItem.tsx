import React from "react";
import s from "components/Dialogs/Dialogs.module.css";

export type MessagePropsType = {
    message: string
}
export const Message:React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}