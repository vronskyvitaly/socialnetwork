import React from 'react';
import {connect} from "react-redux";
import {RootStateType, StoreDispatch} from "redux/redux-store";
import {MyPosts} from "components/Profile/MyPosts/MyPosts";
import {addPostAC, updateNewPostTextAC} from "redux/profile-reducer";


const mapStateToProps = ( state: RootStateType ) => {
    return {
        posts: state.profilePage.posts,
        newPostsText:state.profilePage.newPostsText

    }
}

const mapDispatchToProps = ( dispatch: StoreDispatch ) => {
    return {
        // sendMassage: ( value: string ) => {
        //     dispatch ( sendMassageAC ( value ) )
        // },
        addPost:(newPostText:string) => {
            dispatch(addPostAC(newPostText))
        },
        updateNewPostText:(value:string)=>{
            dispatch(updateNewPostTextAC(value))
        }
    }
}


export default connect ( mapStateToProps, mapDispatchToProps ) ( MyPosts )
