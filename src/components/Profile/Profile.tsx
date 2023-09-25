import React from 'react';
import {MyPosts} from "components/Profile/MyPosts/MyPosts";
import {ProfileInfo} from "components/Profile/ProfileInfo/ProfileInfo";
import {PostsDataType} from "index";



type ProfilePropsType = {
    postsData: PostsDataType[]
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData ={props.postsData} />
        </div>
    );
};

