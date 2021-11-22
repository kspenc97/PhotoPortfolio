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

const SmallImg = ({post}) => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
    M.Parallax.init();
  }, []);


    return (
        <Fragment>
        


            
            {/* Image Modal Creation */}
            <br />
            <div className='parallax-container'>
            <div className='parallax'>
            <img src={image1} alt='img1' style={{width: '90%', height: 'auto'}}/>
            <button />
            </div>
            </div>    
            
            

        </Fragment>
    )
}

export default SmallImg;
