import React from 'react';
import s from './Dialogs.module.css'
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



type DialogsDataType = {
    id:number
    name:string
}

type MessagesDataType = {
    id:number
    message:string
}


export const Dialogs = () => {

    const DialogsData:DialogsDataType[] = [
        {id:1 , name:"Виталий"},
        {id:2 , name:"Влад"},
        {id:3 , name:"Саша"},
        {id:4 , name:"Артем"},
    ]

    const MessagesData:MessagesDataType[] = [
        {id:1 , message:"Привет как дела?"},
        {id:2 , message:"Что делаешь"},
        {id:3 , message:"Завтра встретимся?"},
    ]


    return (
        <div className={s.dialogsPages_wrapper}>
            <div className={s.dialogs}>
                {DialogsData.map(obj=> {
                    return (

                        <DialogItem name={obj.name} id={obj.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {MessagesData.map(me=>{

                    return (
                        <Message message={me.message}/>
                    )
                })}
            </div>
        </div>
    );
};

