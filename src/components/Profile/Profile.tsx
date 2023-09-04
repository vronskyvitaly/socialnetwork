import React from 'react';
import s from 'components/Profile/Profile.module.css'
import MyPosts from "components/Profile/MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://png.pngtree.com/background/20210712/original/pngtree-abstract-modern-neon-frame-background-picture-image_1178251.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>

    );
};

