import React from 'react';
import s from "./Post.module.css";


type PostPropsType = {
    message:string
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.avatar_post}></div>
            <p>{props.message}</p>
        </div>
    );
};

