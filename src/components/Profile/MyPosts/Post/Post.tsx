import React from 'react';
import s from "./Post.module.css";


type PostPropsType = {
    message:string
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={s.post_wrapper}>
            <div className={s.post_avatar}></div>
            <p className={s.post_message}>{props.message}</p>
        </div>
    );
};

