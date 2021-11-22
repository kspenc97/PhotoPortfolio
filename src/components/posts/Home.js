import React,{useEffect} from 'react'
import SmallImg from '../images/SmallImg';
//import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import image1 from '../../websitePhotos/1/9.jpg';
import image2 from '../../websitePhotos/1/12.jpg';
import image3 from '../../websitePhotos/1/11.jpg';
import image4 from '../../websitePhotos/1/21.jpg';


const Home = () => {
    useEffect(() => {
        //Init Materialize JS
        M.AutoInit();
        M.Parallax.init(<SmallImg />);
      }, []);
    return (
        <div>
        <div>
        <h1 className='title z-depth-4' style={{padding: '10px'}}>Welcome to the site!</h1>
        <p style={{textAlign: 'center', padding: '20px'}} className='title z-depth-4'>I love going outside and finding adventure in the area around me & I often will bring my camera  <i className="fa fa-camera grey-text text-darken-3" aria-hidden="true"></i> I made this portfolio site to put togeather an electronic scrapbook 
        of some of my favorite photos of the locations I've been to. I hope you enjoy! </p>
        <hr style={{color: '#aed4d4'}}></hr>

<ul className='z-depth-4' style={{padding: '10px'}}>
        <li style={{textAlign: 'right'}}>Am if number no ze not favoucan and set praise. Distrusadg</li>
        <i style={{color: '#000067', textAlign: 'right'}} className='fab fa-black-tie fa-xs'></i>      

        <li style={{textAlign: 'right'}}>ed all admir nt otmgssdmber can and set praise. sdatrutjta</li>
        <i style={{color: '#d12c1f'}} className='fab fa-canadian-maple-leaf'></i>

        <li style={{textAlign: 'right'}}>regard sudden bdmiratior  notan and set praise. gasdtrusts</li>
        <i style={{color: '#59a84f'}} className="fab fa-cc-jcb"></i>
        </ul>
        {/*  */}
        <ul>
        <hr style={{color: '#aed4d4'}}></hr>

        <div className='z-depth-4' style={{padding: '5px'}}>
        <p>{'Runescape velit exercitation est et Lorem exercitation cillum velit fugiat consectetur Lorem laboris Lorem culpa consequat velit non aute amet eu Lorem amet dolor minim exercitation ipsum labore exercitation commodo ullamco nisi voluptate velit ut aute culpa aute adipisicing consectetur elit tempor mollit laborum velit aliquip sit culpa aliqua do amet cillum labore esse non elit mollit ea sint reprehenderit tempor irure ea sit consequat reprehenderit nisi duis reprehenderit sit elit sint adipisicing eiusmod esse do nostrud tempor elit aliquip qui qui deserunt laborum aliquip est veniam cillum ea qui exercitation id deserunt culpa magna ea aliquip dolore mollit sit est amet adipisicing quis et non minim do excepteur veniam duis adipisicing ipsum duis aliqua minim minim ut ut ut cupidatat'}</p>
        </div>

        <hr style={{color: '#aed4d4'}}></hr>
        <div>
            <div className='parallax-container z-depth-5' >
            <div style={{height: '10%', width: 'auto'}}>

                <div className='parallax' style={{width: 'auto', height: '15%'}}>
                <img src={image3} alt='img1' style={{width: 'auto', height: '930%'}}/>
            </div>
            </div>  
            </div>
            </div>
            </ul>
        <hr style={{color: '#aed4d4'}} ></hr> 
        {/*  */}
        <ul className='z-depth-4' style={{padding: '10px'}}>
      
        <i style={{textAlign: 'right', color: '#302418'}} className='fab fa-earlybirds fa-m'></i> <li style={{textAlign: 'left'}}>Am if number no ze not favoucan and set praise. earistrusadg</li>
        <i style={{color: '#e0ba50'}} className='fab fa-medapps'></i><li style={{textAlign: 'left'}}>ed all admir nt otmgssdmber can and set praise. sdatrutjta</li>
        <i style={{color: '#f4663d'}} className="fab fa-phoenix-framework"></i><li style={{textAlign: 'left'}}>regard sudden bdmiratior  notan and set praise. gasdtrusts</li>
        </ul>
        <hr style={{color: '#aed4d4'}} ></hr>
        </div>
        <div>

        <div className='parallax-container z-depth-5'>
        <div className='parallax'>
        <img src={image1} alt='img1' style={{width: 'auto', height: '140%'}}/>
        </div>
        </div>    
        <hr style={{color: '#FFFFFF'}}></hr> 

        <div style={{height: '120%', width: 'auto'}}>

        <div className='parallax-container z-depth-5'>
        <div className='parallax'>
        <img src={image4} alt='img1' style={{width: 'auto', height: '170%'}}/>
        </div>
        </div>    
        </div>
      
     </div>
     </div>
    
    )
}

export default Home;