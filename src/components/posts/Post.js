import React, {Fragment, useState, useEffect} from 'react';
import Moment from 'react-moment';
import Postimg from './Postimg';
import 'materialize-css/dist/css/materialize.min.css';
import {Link} from 'react-router-dom';

import image1 from '../../websitePhotos/1/1.jpg';
import image2 from '../../websitePhotos/2/2.jpg';
import image3 from '../../websitePhotos/3/3.jpg';
import image4 from '../../websitePhotos/4/4.jpg';
import image5 from '../../websitePhotos/5/5.jpg';

const Post = ({post}) => {
    return (
        <Fragment>
                <div>
                <div className={'row'} >
                    <h1 className={'z-depth-4 push-s0 col s0 '} style={{padding: '15px'}}>{post.title}</h1>
                    </div>
                    <div className={'z-depth-4'} style={{padding: '15px'}}>
                   
                    <p>{post.body}</p>
                 
                    </div>
                    <br />
                  

                    <Postimg image={post.image}/>
                    <br />
                    
                    <div className={'row z-depth-4'} style={{padding: '15px'}}>
                    <span className={'pull-s0 col s0'} >{'Location:  '}{post.location}</span>

                    <div className={'push-s5 col s7 '} >
                    
                    {'Date Visited: '}<Moment  format='MMMM Do YYYY'>{post.date}</Moment> 
                    </div>
                    </div>
                    <br />
                   <Link to={`/singlePost/${post.id}`}><button className="center swaves-effect waves-light btn z-depth-3">Expand</button></Link>
                   <br />
                   <br />

                   <hr  style={{color: 'lightgrey'}}></hr>
                </div>
        </Fragment>
    )
}

export default Post;