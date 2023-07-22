import React, { useEffect, useState } from 'react';
import Passengers from './Passengers';
import Calendar from './Calendar';
import { connect } from 'react-redux';


function Flights(props) {

  const [depart, setDepart] = useState('');

  const [going, setGoing] = useState('');

  const [travelClass, setTravelClass] = useState('Economy')

  const [travellerUpDownArrow, setTravellerUpDownArrow] = useState(false);

  const [deptDate, setDeptDate] = useState(new Date())

  const [returnDate, setReturnDate] = useState(new Date())

  const [ticket, setTicket] = useState('');

  const reset = () => props.dispatch({ type: "RESET" })

  useEffect(() => {
    reset()
  }, [])

  const [passengers, setPassengers] = useState([
    { name: "Adult", info: "", num: 1 },
    { name: "Child", info: "2-12yrs", num: 0 },
    { name: "Infant", info: "Below 2yrs", num: 0 },
  ])

  const flightRoutes = [
    { origin: "New Delhi", dest: "Bengaluru", date: "Wed, 3 Oct", amount: 3590 },
    { origin: "New Delhi", dest: "Mumbai", date: "Sun, 13 Oct", amount: 2890 },
    { origin: "Hyderabad", dest: "Bengaluru", date: "Mon,30 Sep", amount: 2150 },
    { origin: "Mumbai", dest: "Pune", date: "Sun,6 Oct", amount: 1850 }
  ]

  const classes = ["Economy", "Premium Economy", "Business"]

  const handlePassenger = (name, value) => {
    let tempPassengers = [...passengers].map(p => p.name === name ? ({ ...p, num: p.num + value }) : p);
    setPassengers(tempPassengers);

  }

  const gettingDeptDays = ({ date }) => setDeptDate(date)

  const gettingReturnDays = ({ date }) => {
    setReturnDate(date)
    setTicket('Return')
  }


  const handleTicket = ({ currentTarget }) => {
    let { value } = currentTarget;
    if (value === 'Return') {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 1);
      setReturnDate(currentDate)
    }
    setTicket(value)
  }

  const handleCity = ({ currentTarget }) => {
    let { name, value } = currentTarget;
    if (name === "depart") {
      setDepart(value)
    } else {
      setGoing(value)
    }
  }


  const makeDropDown = (name, label, value, startValue, arr) => {
    return (
      <>
        <label htmlFor={name} className='form-label fw-bold'>{label}</label>
        <select className='form-select' name={name} id={name} value={value} onChange={(e) => handleCity(e)}>
          <option value="" selected disabled readOnly>{startValue}</option>
          {
            arr.map((a, index) => <option key={index} value={a}>{a}</option>)
          }
        </select>
      </>
    )
  }

  const showButtons = () => {
    return (
      <>
        <div className='d-flex justify-content-center gap-2'>
          <input type="radio" class="btn-check" name="options-outlined" id="One Way" autocomplete="off" value="One Way" checked={ticket === "One Way"} onClick={(e) => handleTicket(e)} />
          <label class="btn btn-outline-primary" htmlFor="One Way">One Way</label>

          <input type="radio" class="btn-check" name="options-outlined" id="Return" autocomplete="off" value="Return" checked={ticket === "Return"} onClick={(e) => handleTicket(e)} />
          <label class="btn btn-outline-primary" htmlFor="Return">Return</label>
        </div>
      </>
    )
  }

  const showFlights = () => {
    return (
      <>
        <div className='d-flex align-items-center mb-5'>
          <div className="col-md-5">{makeDropDown("depart", "Depart From", depart, "Select Depart", [...new Set(flightRoutes.map(r => r.origin))])}</div>
          <div className="col-md-2 text-center"><i class="fa fa-arrow-right text-light bg-success arrow"></i></div>
          <div className="col-md-5">{makeDropDown("going", "Going To", going, "Select Going", [...new Set(flightRoutes.map(r => r.dest))])}</div>
        </div>
      </>
    )
  }

  const formatDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = day + " " + months[monthIndex] + ", " + year;
    return formattedDate;
  }

  const formatWeek = (date) => {
    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let weekDay = weeks[date.getDay()];
    return weekDay;
  }


  const showDates = () => {
    return (
      <>
        <div className='row mb-5'>
          <div className="col-md-5" type="button">
            <div onClick={() => props.dispatch({ type: "IN" })}>
              <div className='fw-bold'>Departure Date</div>
              <h4>{formatDate(deptDate)}</h4>
              <div>{formatWeek(deptDate)}</div>
            </div>
            {
              props.props.isIn && (
                <div className="row">
                  <div className="m-0 p-0">
                    <Calendar gettingDays={gettingDeptDays} close="IN" />
                  </div>
                </div>
              )
            }
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5" type="button">
            <div onClick={() => props.dispatch({ type: "OUT" })}>
              <div className='fw-bold'>Return Date</div>
              {
                ticket === 'Return' ? (
                  <>
                    <h4>{formatDate(returnDate)}</h4>
                    <div>{formatWeek(returnDate)}</div>
                  </>
                ) : (<div type="button" className='text-primary'>Book Round Trip To Save Extra</div>)
              }
            </div>
            {
              props.props.isOut && (
                <div className="row">
                  <div className="m-0 p-0">
                    <Calendar gettingDays={gettingReturnDays} close="OUT" />
                  </div>
                </div>
              )
            }
          </div>
        </div >
      </>
    )
  }


  const showTravellers = () => {
    return (
      <>
        <div className="row align-items-center py-3" type="button" data-bs-toggle="collapse" data-bs-target="#showTravellers" aria-expanded="false" aria-controls="showTravellers" onClick={() => setTravellerUpDownArrow(!travellerUpDownArrow)}>
          <div className="col-md-8">
            <div className='fw-bold' >Travellers, class</div>
            <h4 >{passengers.reduce((acc, cur) => cur.num + acc, 0)} Traveller{passengers.reduce((acc, cur) => cur.num + acc, 0) > 1 && 's'}, {travelClass}</h4>
          </div>
          <div className="col-md-4 text-end">
            <i class={`fa fa-chevron-${travellerUpDownArrow ? 'up' : 'down'}`}></i>
          </div>
        </div >
        <div className="collapse" id="showTravellers">
          <div className="row my-3">
            {
              passengers.map(pass => <div className="col-md-4"><Passengers pass={pass} handlePassenger={handlePassenger} /></div>)
            }
          </div>
          <div className="row mx-2">
            {
              classes.map(cl =>
                <div className="form-check">
                  <input type="radio" name="travelClass" id={cl} className="form-check-input" value={cl} checked={cl === travelClass} onChange={(e) => setTravelClass(e.target.value)} />
                  <label htmlFor={cl} className="form-check-label">{cl}</label>
                </div>
              )
            }
          </div>
        </div>
      </>
    )
  }

  const searchFlight = () => {
    let str = `From: ${depart}, To: ${going}, Depart Date: ${deptDate.toDateString()}, ${ticket === 'Return' ? `Return Date: ${returnDate.toDateString()}` : ''}, Number Of Travellers = (${passengers.map(p => `${p.num}: ${p.name}`).join(', ')} )`
    alert(str);
  }

  return (
    <div className="container">
      <div className="row">{showButtons()}</div>
      <div className="row">{showFlights()}</div>
      <hr />
      <div className="row">{showDates()}</div>
      <hr />
      <div className="row">{showTravellers()}</div>
      <hr />
      <div className="row">
        <div className='text-end'>
          <button type='button' className='btn btn-primary fw-bold lead p-3' onClick={searchFlight}>Search Flights <i class="fa fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({ props: state })

export default connect(mapStateToProps)(Flights)


