import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://png.pngtree.com/background/20210712/original/pngtree-abstract-modern-neon-frame-background-picture-image_1178251.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
            </div>
            <div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
                <div>
                    Post 3
                </div>
            </div>
        </div>

    );
};

