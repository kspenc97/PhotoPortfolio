import React, {Fragment, useEffect} from 'react';
import '../../App.css';
//Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

//set 1
import image1 from '../../websitePhotos/1/1.jpg';
import image2 from '../../websitePhotos/1/2.jpg';
import image3 from '../../websitePhotos/1/3.jpg';
import image4 from '../../websitePhotos/1/4.jpg';
import image5 from '../../websitePhotos/1/5.jpg';
//set 2
import image6 from '../../websitePhotos/2/1.jpg';
import image7 from '../../websitePhotos/2/2.jpg';
import image8 from '../../websitePhotos/2/3.jpg';
import image9 from '../../websitePhotos/2/4.jpg';
import image10 from '../../websitePhotos/2/5.jpg';
//set 3
import image11 from '../../websitePhotos/3/1.jpg';
import image12 from '../../websitePhotos/3/2.jpg';
import image13 from '../../websitePhotos/3/3.jpg';
import image14 from '../../websitePhotos/3/4.jpg';
import image15 from '../../websitePhotos/3/5.jpg';
//set 4
import image16 from '../../websitePhotos/4/1.jpg';
import image17 from '../../websitePhotos/4/2.jpg';
import image18 from '../../websitePhotos/4/3.jpg';
import image19 from '../../websitePhotos/4/4.jpg';
import image20 from '../../websitePhotos/4/5.jpg';
//set 5
import image21 from '../../websitePhotos/5/1.jpg';
import image22 from '../../websitePhotos/5/2.jpg';
import image23 from '../../websitePhotos/5/3.jpg';
import image24 from '../../websitePhotos/5/4.jpg';
import image25 from '../../websitePhotos/5/5.jpg';
//

const CarouselBase = ({post}) => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  }, []);


    return (
        <Fragment>
        

            <div className="carousel ">
              
           {/* eslint-disable-next-line */}
             { post.id == 1 &&
               <Fragment>
                <a  className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal1"><img src={image1} alt='img1' /></a>
                <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal2"><img src={image2} alt='img1' /></a>
                <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal3"><img src={image3} alt='img1' /></a>
                <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal4"><img src={image4} alt='img1' /></a>
                <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal5"><img src={image5} alt='img1' /></a>
                </Fragment>
             }
          {/* eslint-disable-next-line */}
             { post.id == 2 &&
              <Fragment>
               <a  className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal6"><img src={image6} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal7"><img src={image7} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal8"><img src={image8} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal9"><img src={image9} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal10"><img src={image10} alt='img1' /></a>
               </Fragment>
            }
            {/* eslint-disable-next-line */}
            { post.id == 3 &&
              <Fragment>
               <a  className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal11"><img src={image11} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal12"><img src={image12} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal13"><img src={image13} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal14"><img src={image14} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal15"><img src={image15} alt='img1' /></a>
               </Fragment>
            }
            {/* eslint-disable-next-line */}
            { post.id == 4 &&
              <Fragment>
               <a  className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal16"><img src={image16} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal17"><img src={image17} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal18"><img src={image18} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal19"><img src={image19} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal20"><img src={image20} alt='img1' /></a>
               </Fragment>
            }
            {/* eslint-disable-next-line */}
            { post.id == 5 &&
              <Fragment>
                <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal21"><img src={image21} alt='img1' /></a>
                <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal22"><img src={image22} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal23"><img src={image23} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal24"><img src={image24} alt='img1' /></a>
               <a className="carousel-item modal-trigger z-depth-3" style={{padding: '20px'}} href="#img-modal25"><img src={image25} alt='img1' /></a>
               </Fragment>
            }
            </div>
            
            {/* Image Modal Creation */}
            <div id='img-modal1' className='modal' style={{width: '100vw', height: 'auto', }}>
            <div className='modal-content'>
            <img src={image1} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>
            {/* Image Modal Creation */}
            <div id='img-modal2' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image2} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal3' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image3} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal4' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image4} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal5' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image5} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal6' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image6} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal7' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image7} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal8' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image8} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal9' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image9} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal10' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image10} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal11' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image11} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal12' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image12} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal13' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image13} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal14' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image14} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal15' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image15} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal16' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image16} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal17' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image17} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal18' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image18} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal19' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image19} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>{/* Image Modal Creation */}
            <div id='img-modal20' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image20} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>
            {/* Image Modal Creation */}
            <div id='img-modal21' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image21} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>
            {/* Image Modal Creation */}
            <div id='img-modal22' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image22} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>
            {/* Image Modal Creation */}
            <div id='img-modal23' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image23} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>
            {/* Image Modal Creation */}
            <div id='img-modal24' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image24} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>
            {/* Image Modal Creation */}
            <div id='img-modal25' className='modal' style={{width: '100vw', height: 'auto'}}>
            <div className='modal-content'>
            <img src={image25} alt='img1' style={{width: '90%', height: 'auto'}}/>
            </div>    
            </div>
              

        </Fragment>
    )
}

export default CarouselBase;
