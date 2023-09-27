import React from 'react';
import {MyPosts} from "components/Profile/MyPosts/MyPosts";
import {ProfileInfo} from "components/Profile/ProfileInfo/ProfileInfo";
import {PostsDataType} from "redux/state";




type ProfilePropsType = {
    posts: PostsDataType[]
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} />
        </div>
    );
};

