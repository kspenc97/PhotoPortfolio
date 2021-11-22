import React, {Fragment, useContext, useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import Moment from 'react-moment';
import { PostsContext } from '../../context/PostsContext';
import CarouselBase from '../images/CarouselBase';


const SinglePost = () => {
    const [postLoaded, setPost] = useState({});
    const {posts} = useContext(PostsContext);
    const params = useParams();
    let tempId = params.id;
    

 

    let post = posts.find((post) => {
        // eslint-disable-next-line
        return tempId == post.id;
    })


    
    return (
        <Fragment>
        <div>
            <div style={{padding: '5px'}} className={'row z-depth-4 col s6 offset-s1'}>
            <h1 >{post.title}</h1>
            </div>
            
            <br />
            <div  style={{padding: '15px'}} className={'row z-depth-4 col s offset-s9'}>
            <p>{post.body}</p>
            </div>
            <br />
            <div className={'row'}>
            <span style={{padding: '15px'}} className={'z-depth-4 col s0 offset-s9'}>{'Location: '}{post.location}</span>
            </div>
            <CarouselBase post={post}/>
            <div className={'row'}>
            <div style={{padding: '15px'}} className={'z-depth-4 col s0 offset-s0'} >
            {'Date Visited: '}<Moment  format='MMMM Do YYYY'>{post.date}</Moment> <br/>
            </div>
            </div>
        <br/>
           <Link to={'/posts'}><button className="center swaves-effect waves-light btn z-depth-3">Return to List</button></Link>
           <br />
        </div>
        <br />
        <br />

        </Fragment>
    )
}

export default SinglePost;