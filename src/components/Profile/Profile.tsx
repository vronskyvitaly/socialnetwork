import React from 'react';
import {MyPosts} from "components/Profile/MyPosts/MyPosts";
import {ProfileInfo} from "components/Profile/ProfileInfo/ProfileInfo";
import {ActionTypes, PostsDataType} from "redux/state";



type ProfilePropsType = {
    posts: PostsDataType[]
    newPostsText: string
    dispatch :(action:ActionTypes)=>void

}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostsText ={props.newPostsText}
                     dispatch = {props.dispatch}

            />
        </div>
    );
};

