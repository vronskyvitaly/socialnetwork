import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "components/Dialogs/DialogItem/DialogItem";
import {Message} from "components/Dialogs/Message/MessageItem";
import {DialogsDataType, MessagesDataType} from "redux/state";





type DialogsPropsType = {
        dialogs: DialogsDataType[]
        messages: MessagesDataType[]
}

export const Dialogs = (props:DialogsPropsType) => {



    const dialogsElement = props.dialogs.map(d=>
        <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.messages.map(m=>
        <Message message={m.message}/>)



    return (
        <div className={s.dialogsPages_wrapper}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

