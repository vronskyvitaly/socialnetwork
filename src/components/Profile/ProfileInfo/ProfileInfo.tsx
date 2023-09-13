import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img_style} src="https://png.pngtree.com/background/20210712/original/pngtree-abstract-modern-neon-frame-background-picture-image_1178251.jpg" alt=""/>
            </div>
            <div className={s.description}>
                ava+description
            </div>
        </div>
    );
};

