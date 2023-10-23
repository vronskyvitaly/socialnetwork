import React from 'react';
import {MyPosts} from "components/Profile/MyPosts/MyPosts";
import {ProfileInfo} from "components/Profile/ProfileInfo/ProfileInfo";
import {ActionTypes, PostsDataType} from "redux/store";



type ProfilePropsType = {
    /*posts: PostsDataType[]
    newPostsText: string
    dispatch :(action:ActionTypes)=>void*/
}

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

