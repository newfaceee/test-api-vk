import React from 'react';

import Post from '../Post/Post';

import './PostList.scss';

const PostList = ({posts}) => {
    return <div className="post-list">
        {posts?.map((post) => <Post key={post.id} postId={post.id} {...post} />)}
    </div>
};

export default PostList;
