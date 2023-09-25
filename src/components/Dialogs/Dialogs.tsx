import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "components/Dialogs/DialogItem/DialogItem";
import {Message} from "components/Dialogs/Message/MessageItem";
import {DialogsDataType, MessagesDataType} from "index";




type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

export const Dialogs = (props:DialogsPropsType) => {



    const dialogsElement = props.dialogsData.map(d=> <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.messagesData.map(m=> <Message message={m.message}/>)



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

