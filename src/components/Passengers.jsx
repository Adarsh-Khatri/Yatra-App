import React from 'react'

function Passengers(props) {
  let { name, info, num, } = props.pass;
  return (
    <div className="container">
      <div className="row">
        <div> <span className='fw-bold'>{name}</span> {info && <small className='text-muted'>( {info} )</small>}</div>
      </div>
      <div className="row">
        <div className="button-group">
          <button type='button' className='btn btn-outline-danger fw-bold py-1' disabled={num === 0} onClick={() => props.handlePassenger(name, -1)}>-</button>
          <button type='button' className='btn btn-outline-secondary fw-bold py-1' disabled>{num}</button>
          <button type='button' className='btn btn-outline-success fw-bold py-1' onClick={() => props.handlePassenger(name, 1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Passengers