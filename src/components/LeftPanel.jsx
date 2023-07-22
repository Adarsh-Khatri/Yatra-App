import React, { useState } from 'react'
import Flights from './Flights';
import Hotels from './Hotels';

function LeftPanel() {
  const [transportName, setTransportName] = useState('');

  const logo = (icon, name) => {
    return (
      <div className='text-center'>
        <i className={`fa fa-${icon} bg-${transportName === name ? 'danger' : 'dark'} fs-3 text-light logo-transport`} onClick={() => setTransportName(name)}></i>
        <div>{name}</div>
      </div>
    )
  }


  return (
    <div className="container bg-light py-3 h-100">
      <div className="row fw-bold">
        <div className='d-flex justify-content-between'>
          {logo("plane", "Flights")}
          {logo("bed", "Hotels")}
          {logo("bus", "Buses")}
          {logo("car", "Taxis")}
        </div>
        <h3 className='text-center fw-bold'>{transportName}</h3>
      </div>
      <div className="row">
        {
          transportName === 'Flights' ? (<Flights />) : transportName === "Hotels" ? (<Hotels />) : ""
        }
      </div>
    </div>
  )
}

export default LeftPanel