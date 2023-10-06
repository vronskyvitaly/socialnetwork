import React from 'react';
import {MyPosts} from "components/Profile/MyPosts/MyPosts";
import {ProfileInfo} from "components/Profile/ProfileInfo/ProfileInfo";
import {PostsDataType} from "redux/state";


type ProfilePropsType = {
    posts: PostsDataType[]
    addPost: () => void
    newPostsText: string
    updateNewPostText:(newPost:string) =>void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostsText ={props.newPostsText}
                     addPost={props.addPost}
                     updateNewPostText ={props.updateNewPostText}
            />
        </div>
    );
};

