import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default () => {
    return <div className="container">
    <h1>Create Post</h1>
    <PostCreate/>
    <hr></hr>
    <h1>Posts</h1>
    <PostList/>
    </div>;
};