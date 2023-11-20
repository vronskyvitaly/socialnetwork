import React, {FC} from 'react';
import {ProfileInfo} from "components/Profile/ProfileInfo/ProfileInfo";
import MyPostContainer from "components/Profile/MyPosts/MyPostContainer";
import {ProfileContainerType} from "components/Profile/ProfileContainer";

/*
type ProfilePropsType = {
    posts: PostsDataType[]
    newPostsText: string
    dispatch :(action:ActionTypes)=>void
}
*/

export const Profile:FC <ProfileContainerType> = (props) => {

    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostContainer/>
        </div>
    );
};

