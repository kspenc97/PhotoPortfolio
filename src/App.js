import React, {useEffect, Fragment} from 'react';
import './App.css';

import Home from './components/posts/Home';
import NavBar from './components/nav/NavBar';
import Hire from './components/hire/Hire';
import PostList from './components/posts/PostList';
import SinglePost from './components/posts/SinglePost';
import CarouselBase from './components/images/CarouselBase';
import Footer from './components/nav/Footer';
import { PostsState } from './context/PostsContext';
import Easter from './components/posts/Easter';
//Router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


//Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SmallImg from './components/images/SmallImg';


const App =() => {

  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
    M.Carousel.init(<CarouselBase />);
    M.Parallax.init(<SmallImg />);
  }, []);
  return (
    <PostsState>
    <Router>
    <Fragment>
    <NavBar />
    <div className='container'>
   
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<PostList />}/>
        <Route path='/hire' element={<Hire />}/>
        <Route path='/easteregg' element={<Easter />}/>

        <Route path='/singlePost/:id' element={<SinglePost  />}/>
        </Routes>
 </div>
 <Footer />

</Fragment>
</Router>
</PostsState>
  );
}

export default App;
