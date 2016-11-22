import React from 'react'

export default React.createClass({
  render() {
    const local = this.props.local.impressum

    const phone = <i className="fa fa-phone" aria-hidden="true"></i>
    const envelope = <i className="fa fa-envelope-o" aria-hidden="true"></i>
    const location = <i className="fa fa-map-marker" aria-hidden="true"></i>

    return (
      <div id='impressum-container' className='white-container'>
        <div className="row">
          <div className="col-md-12">
            <h2>{local.title}</h2>
            <br/>
          </div>
          <div className="col-md-6">
            <p><b>{local.nico.name}</b></p>
            <p>{phone} {local.nico.phone}</p>
            <p>{envelope} {local.nico.email}</p>
          </div>
          <br/>
          <div className="col-md-6">
            <p><b>{local.pepe.name}</b></p>
            <p>{phone} {local.pepe.phone}</p>
            <p>{envelope} {local.pepe.email}</p>
          </div>
          <div className="col-md-12">
            <br/>
            <p>{location} {local.street}</p>
          </div>
        </div>
      </div>
    )
  }
})
