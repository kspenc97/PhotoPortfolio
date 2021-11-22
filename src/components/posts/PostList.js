import React, {useContext} from 'react';
import Post from './Post';
import { PostsContext } from '../../context/PostsContext';

const PostList = () => {
    const {posts, loading, img1} = useContext(PostsContext);


    
    return (
        <div>
        <br />
       <div className='modal-content'>
            <ul className='collection z-depth-4' style={{padding: '20px'}}>
                {!loading && posts.map((post) => (
                <Post key={post.id} post={post} image={post.image}/>
                ))}
            </ul>

     
       </div>


       </div>
    )
}

export default PostList;
