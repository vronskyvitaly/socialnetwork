import React from 'react';
import {Post} from "components/Profile/MyPosts/Post/Post";
import s from "./MyPosts.module.css"


const MyPosts = () => {
    return (
        <div >
            <div>
                <textarea>
                </textarea>
                <button>Add post</button>
                <div>
                    New posts
                </div>
            </div>
            <div className={s.posts}>
                <Post message = {"One message"}/>
                <Post message = {"Two message"}/>
                <Post message = {"Three message"}/>
            </div>
        </div>
    )

};

export default MyPosts;