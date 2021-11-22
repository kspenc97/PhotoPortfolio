import React from 'react';

import image1 from '../../websitePhotos/1/1.jpg';
import image2 from '../../websitePhotos/2/2.jpg';
import image3 from '../../websitePhotos/3/3.jpg';
import image4 from '../../websitePhotos/4/4.jpg';
import image5 from '../../websitePhotos/5/5.jpg';


const Postimg = ({ image }) => {
    let currentImage
    switch (image) {
        case 'image1':
            currentImage = image1
            break;
        case 'image2':
            currentImage = image2
            break;
        case 'image3':
            currentImage = image3
            break;
        case 'image4':
            currentImage = image4
            break;
        case 'image5':
            currentImage = image5
            break;
        default:
            break;
    }


    return (
        <div className='row'>
            <img className='z-depth-4 col s1 offset-s4' style={{ width: '25vw', padding: '17px'}} src={currentImage} alt='img1' />
        </div>
    )
}

export default Postimg;