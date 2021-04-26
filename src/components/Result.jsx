import React, { memo } from 'react';
import PostList from './PostList/PostList';

const Result = ({data, totalCount, nextPage}) => {
    return (
        <>
        
            <p>Найденных постов: {totalCount ?? 0}</p>
            {
                data?.length > 0 && <PostList posts={[...data]} />
            }
        </>
    )
};

export default memo(Result);
