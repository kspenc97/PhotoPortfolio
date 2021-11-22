import React from 'react'

const Footer = () => {
    return (
        <div>
            
        <footer className="page-footer teal ">
        <div className="container">
          <div className="row">
            <div className="col l6 s12 z-depth-4">
              <h5 className="white-text">Unique Spots</h5>
              <p className="grey-text text-lighten-4">This site is a practice project made using React that showcases some cool spots I have visted along with
              some photographs of those spots organized into React Elements. I enjoyed creating this project!</p>
            </div>
            <div className="col l4 offset-l2 s12 z-depth-4">
              <h5 className="white-text ">Packages Used</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Materialize</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Moment</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Firebase</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">uuid</a></li>


          
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright z-depth-4">
          <div className="container z-depth-4" style={{padding: '10px'}}>
          © 2021 Made By Kyle Spencer
          </div>
        </div>
      </footer>
        </div>
    )
}


export default Footer;