import React,{useEffect} from 'react'
//import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import image1 from '../../websitePhotos/1/15.jpg';
import image2 from '../../websitePhotos/1/14.jpg';
import image3 from '../../websitePhotos/1/13.jpg';


const Easter = () => {
    useEffect(() => {
        //Init Materialize JS
        M.AutoInit();
        M.Parallax.init();
      }, []);
    return (
        <div>
        <br />

            <div className='parallax-container z-depth-5' >
            <div style={{height: '90%', width: 'auto'}}>

                <div className='parallax' style={{width: 'auto', height: '100%'}}>
                <img src={image1} alt='img1' style={{width: 'auto', height: '150%'}}/>
            </div>
            </div>  
            </div>
            <br />
        <div className='parallax-container z-depth-5'>
        <div className='parallax' style={{width: 'auto', height: '100%'}}>
        <img src={image2} alt='img1' style={{width: 'auto', height: '90%'}}/>
        </div>
        </div>    
        <br />

        <div style={{height: '190%', width: 'auto'}}>

        <div className='parallax-container z-depth-5'>
        <div className='parallax'>
        <img src={image3} alt='img1' style={{width: 'auto', height: '120%'}}/>
        </div>
        </div>    
        </div>
        <br />

     </div>
    
    )
}

export default Easter;