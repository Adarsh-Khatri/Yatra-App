import React, { useState } from 'react';
import CalendarDays from './CalendarDays.jsx';
import '../calendar.css';

const Calendar = (props) => {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [currentDay, setCurrentDay] = useState(new Date());


  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
    props.gettingDays(day)
  };

  const nextDay = () => {
    setCurrentDay((prevDay) => new Date(prevDay.setDate(prevDay.getDate() + 1)));
  };

  const previousDay = () => {
    setCurrentDay((prevDay) => new Date(prevDay.setDate(prevDay.getDate() - 1)));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="calendar border border-3">
          <div className="calendar-header">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div type="button" className='' onClick={previousDay}>
                <i className="fa fa-angle-left fw-bold fs-4"></i>
                <i className="fa fa-angle-left fw-bold fs-4"></i>
              </div>
              <p className='lead p-0 m-0'>{`${months[currentDay.getMonth()]} ${currentDay.getFullYear()}`}</p>
              <div type="button" className='' onClick={nextDay}>
                <i class="fa fa-angle-right fw-bold fs-4"></i>
                <i class="fa fa-angle-right fw-bold fs-4"></i>
              </div>
            </div>
          </div>
          <div className="calendar-body">
            <div className="table-header d-flex justify-content-around  px-2">
              {weekdays.map((weekday) => (
                <div className="weekday w-100 mx-1 text-center bg-secondary opacity-50 fw-bold" key={weekday}>
                  <p>{weekday}</p>
                </div>
              ))}
            </div>
            <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} close={props.close} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
