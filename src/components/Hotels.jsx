import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import { connect } from 'react-redux';
import { FieldArray, Field, Form, Formik } from 'formik';

function Hotels(props) {

  const [checkIn, setCheckIn] = useState(new Date());

  // getting tomorrows date
  const checkOutDateDefault = new Date();
  checkOutDateDefault.setDate(checkOutDateDefault.getDate() + 1);

  // expanding up-down arrow
  const [travellerUpDownArrow, setTravellerUpDownArrow] = useState(false);

  const [checkOut, setCheckOut] = useState(checkOutDateDefault);

  const [loc, setLoc] = useState('');

  // for storing updated rooms data
  const [hotel, setHotel] = useState([
    { rooms: [{ name: "Adult", info: "Above 12 years", num: 2, }, { name: "Child", info: "Below 12 years", num: 0 }] }
  ])

  let numOfTravellers = hotel.reduce((acc, cur) => acc + cur.rooms.reduce((acc, cur) => acc + cur.num, 0), 0)

  // initial data for fieldarray
  const hotels = [
    { rooms: [{ name: "Adult", info: "Above 12 years", num: 2, }, { name: "Child", info: "Below 12 years", num: 0 }] }
  ]

  const reset = () => props.dispatch({ type: "RESET" })

  useEffect(() => {
    reset()
  }, [])



  const locs = [
    { display: "New Delhi, Delhi, India ( 3603 hotels )", value: "NewDelhi" },
    { display: "Bengaluru, Karnataka, India ( 2781 hotels )", value: "Bengaluru" },
    { display: "Mumbai, Maharashtra, India ( 3188 hotels )", value: "Mumbai" },
    { display: "Pune, Maharashtra, India ( 1419 hotels )", value: "Pune" },
    { display: "Jaipur, Rajasthan, India ( 1822 hotels )", value: "Jaipur" },
    { display: "Goa, India ( 4125 hotels )", value: "Goa" },
    { display: "Kolkata, WestBengal, India ( 2466 hotels )", value: "Kolkata" },
    { display: "Bangkok, Thailand", value: "Bangkok" },
    { display: "Singapore, Singapore", value: "Singapore" }
  ]


  // setting check-in date
  const gettingCheckInDate = ({ date }) => setCheckIn(date)

  // setting check-out date
  const gettingCheckOutDate = ({ date }) => setCheckOut(date)

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



  const showLocations = () => {
    return (
      <>
        <div className="form-group mb-4">
          <label htmlFor="loc" className='form-label fw-bold'>Select City, Location, Hotel Name</label>
          <select className="form-select" id="loc" name="loc" value={loc} onChange={(e) => setLoc(e.currentTarget.value)}>
            <option value="" disabled selected>Select City, Location, Hotel Name</option>
            {
              locs.map((l, index) => <option value={l.value} key={index}>{l.display}</option>)
            }
          </select>
        </div>
      </>
    )
  }


  const showDates = () => {
    return (
      <>
        <div className='row mb-5'>
          <div className="col-md-5">
            <div type="button" onClick={() => props.dispatch({ type: "IN" })}>
              <div className='fw-bold'>Check-in Date</div>
              <h4>{formatDate(checkIn)}</h4>
              <div>{formatWeek(checkIn)}</div>
            </div>
            {
              props.props.isIn && (
                <div className="row">
                  <div className="m-0 p-0">
                    <Calendar gettingDays={gettingCheckInDate} close="IN" />
                  </div>
                </div>
              )
            }
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div type="button" onClick={() => props.dispatch({ type: "OUT" })}>
              <div className='fw-bold'>Check-out Date</div>
              <h4>{formatDate(checkOut)}</h4>
              <div>{formatWeek(checkOut)}</div>
            </div>
            {
              props.props.isOut && (
                <div className="row">
                  <div className="m-0 p-0">
                    <Calendar gettingDays={gettingCheckOutDate} close="OUT" />
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
            <div className='fw-bold' >Traveller and Hotel</div>
            <h4>{numOfTravellers} Traveller{numOfTravellers > 1 && "s"}, {hotel.length} Room</h4>
          </div>
          <div className="col-md-4 text-end">
            <i class={`fa fa-chevron-${travellerUpDownArrow ? 'up' : 'down'}`}></i>
          </div>
        </div >



        <div className="collapse" id="showTravellers">
          <div className="row my-3">
            <Formik initialValues={{ hotels }}>
              {() => (
                <Form>
                  <FieldArray
                    name="hotels"
                    render={(fieldArrayProps) => {
                      let { push, remove, form } = fieldArrayProps;
                      let { values } = form;
                      let { hotels } = values;

                      return (
                        <div>
                          {
                            hotels.map((hotel, hotelIndex) => (
                              <div key={hotelIndex}>
                                <div className="row mb-3">
                                  <div className="row"><div className='fw-bold'>Room {hotelIndex + 1}: </div></div>
                                  <div className="col-md-2 align-self-end">
                                    <i className='fa fa-user fs-3'></i>
                                  </div>
                                  {
                                    hotel.rooms.map((room, roomIndex) => (
                                      <div className="col-md-5" key={roomIndex}>
                                        <div> <span className='fw-bold'>{room.name}</span> <small className='text-muted'>( {room.info} )</small></div>
                                        <div className="row">
                                          <div className="button-group">
                                            <button type="button" className="btn btn-outline-danger fw-bold py-1"
                                              onClick={() => {
                                                const updatedHotels = [...hotels];
                                                const updatedRooms = [...updatedHotels[hotelIndex].rooms];
                                                updatedRooms[roomIndex].num =
                                                  updatedRooms[roomIndex].num > 0 ? updatedRooms[roomIndex].num - 1 : 0;
                                                updatedHotels[hotelIndex].rooms = updatedRooms;
                                                setHotel(updatedHotels);
                                                form.setFieldValue('hotels', updatedHotels);
                                              }}>-</button>
                                            <button type="button" className="btn btn-outline-secondary fw-bold py-1" disabled>
                                              {room.num}
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-outline-success fw-bold py-1"
                                              onClick={() => {
                                                const updatedHotels = [...hotels];
                                                const updatedRooms = [...updatedHotels[hotelIndex].rooms];
                                                updatedRooms[roomIndex].num += 1;
                                                updatedHotels[hotelIndex].rooms = updatedRooms;
                                                setHotel(updatedHotels);
                                                form.setFieldValue('hotels', updatedHotels);
                                              }}
                                            >
                                              +
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    ))
                                  }
                                </div>
                              </div>
                            ))}
                          <div className='d-flex gap-3 mt-4'>
                            <button type="button" className="btn btn-outline-success btn-sm fw-bold"
                              onClick={() => {
                                push({ rooms: [{ name: "Adult", info: "Above 12 years", num: 2, }, { name: "Child", info: "Below 12 years", num: 0 }] });
                                setHotel((pre) => ([...pre, { rooms: [{ name: "Adult", info: "Above 12 years", num: 2, }, { name: "Child", info: "Below 12 years", num: 0 }] }]))
                              }
                              } > Add Room </button>
                            {hotels.length > 1 && (
                              <button type="button" className="btn btn-outline-danger btn-sm fw-bold" onClick={() => {
                                let tempHotel = [...hotel];
                                tempHotel.pop();
                                console.log('temp:', tempHotel);
                                setHotel(tempHotel);
                                remove(hotels.length - 1);
                              }
                              } > Remove Room </button>
                            )}
                          </div>
                        </div>
                      );


                    }}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </>
    )
  }

  const searchRooms = () => {
    let str = `Travel To: ${loc}, Check-in Date: ${checkIn.toDateString()}, Check-out Date: ${checkOut.toDateString()}, Number Of Travellers = ${numOfTravellers}, Number Of Rooms = ${hotel.length}`
    alert(str);
  }

  return (
    <div className="container">
      <div className="row">{showLocations()}</div>
      <hr />
      <div className="row">{showDates()}</div>
      <hr />
      <div className="row">{showTravellers()}</div>
      <hr />
      <div className="row">
        <div className='text-end'>
          <button type='button' className='btn btn-primary fw-bold lead p-3' onClick={searchRooms}>Search Rooms <i class="fa fa-arrow-right"></i></button>
        </div>
      </div>
    </div >
  )
}

const mapStateToProps = state => ({ props: state })

export default connect(mapStateToProps)(Hotels)


