import React from 'react';
import {ProfileInfo} from "components/Profile/ProfileInfo/ProfileInfo";
import MyPostContainer from "components/Profile/MyPosts/MyPostContainer";

/*
type ProfilePropsType = {
    posts: PostsDataType[]
    newPostsText: string
    dispatch :(action:ActionTypes)=>void
}
*/

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    );
};

