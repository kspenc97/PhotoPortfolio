import React from 'react'

export const Hire = () => {
    return (
        <div className='z-depth-4' style={{padding: '25px'}}>
        <br />

        <div className="row z-depth-4" style={{padding: '5px'}} >

        <h5>Contact Form</h5>
        </div>
        <br />



        <div className="row z-depth-4">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate"/>
              <label for="icon_prefix">First Name</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" className="validate"/>
              <label for="icon_telephone">Telephone</label>
            </div>
          </div>
        </form>
      </div>
      <br />
      <br />

      <div className="row z-depth-4">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">mode_edit</i>
            <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
            <label for="icon_prefix2">Project Description</label>
          </div>
        </div>
      </form>
    </div>
        <br />
        <br />

    <button  className="btn waves-effect waves-light z-depth-4" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
  </button>
  <br />
            
    <br />
    <br />
    <br />
        </div>
    )
}

export default Hire;