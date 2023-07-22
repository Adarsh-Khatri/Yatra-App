import React from 'react';
import { connect } from 'react-redux';



const CalendarDays = (props) => {
  const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
      year: firstDayOfMonth.getFullYear()
    };
    currentDays.push(calendarDay);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="table-content w-100">
          {currentDays.map((day) => (
            <div className={`calendar-day${day.currentMonth ? ' current' : ''}${day.selected ? ' selected' : ''}`}
              onClick={() => props.changeCurrentDay(day)}
              key={day.date.toISOString()}>
              <p className='text-center' onClick={() => props.dispatch({ type: props.close })}>{day.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ props: state })

export default connect(mapStateToProps)(CalendarDays);
