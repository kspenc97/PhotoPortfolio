import React, {useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import M from 'materialize-css/dist/js/materialize.min.js';


const NavBar = () => {

  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
    M.Sidenav.init();

  }, []);

    return (
      <Fragment>
        <nav className="nav-extended teal z-depth-4 sidenav-trigger" style={{width: '100vw', height: 'auto'}}>
        <div className="nav-wrapper z-depth-2" style={{padding: '15px', width: '100vw', height: 'auto'}}>
        <span className="nav-title z-depth-4" style={{padding: '5px'}}>Photography Portfolio</span>
        
        <ul className="right hide-on-med-and-down">
          
            <li><Link to='/easteregg'  className='btn-medium waves-effect waves-light maroon '><i className="fas fa-rocket"></i></Link></li>
            <li><Link to='/'  className='btn-medium waves-effect waves-heavy maroon z-depth-4'>Home</Link></li>
            <li><Link to='/posts'  className='btn-medium waves-effect waves-heavy maroon  '>Posts</Link></li>
            <li><Link to='/hire'  className='btn-medium waves-effect waves-light maroon z-depth-4'>Hire</Link></li>

          </ul>
        

        </div>
        
      </nav>
      <nav className='nav-wrapper teal z-depth-5'>
      <a href="#!" data-target="mobile" className="sidenav-trigger btn-medium left " style={{padding: '5px'}}><i className="material-icons">menu</i></a>
        </nav> 
      <ul className="left sidenav show-on-med-and-down" id="mobile">
      <li><Link to='/easteregg'  className='btn-medium waves-effect waves-light maroon '><i className="fas fa-rocket"></i></Link></li>
      <li><Link to='/'  className='btn-medium waves-effect waves-heavy maroon'>Home</Link></li>
      <li><Link to='/posts'  className='btn-medium waves-effect waves-heavy maroon  '>Posts</Link></li>
      <li><Link to='/hire'  className='btn-medium waves-effect waves-light maroon'>Hire</Link></li>
      </ul>


      </Fragment>
    )
}

export default NavBar;
