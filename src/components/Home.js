import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import moment from 'moment';
import DayCard from './DayCard';

export default function Home({shoCard}) {
  
  const [dateState, setDateState] = useState(new Date());

  const [publicEvents, setPublicEvents] = useState ([]);

  const changeDate = (e) => {
    setDateState(e)
  };


  //Get all Public Events for Calender
  function getPublicEvents() {
  fetch("http://localhost:9292/our_event")
  .then((r) => r.json())
  .then((data) => setPublicEvents(data))};
  useEffect(getPublicEvents, []);

  //filter events to delete specific event
  function removeEvent(name){
    const result = publicEvents.filter(event => event.name !== name)
    setPublicEvents(result)
  }

    return (
        <CalendarContainer>
            <Calendar 
            calendarType='US'
            value={dateState}
            onChange={changeDate}
            />
            {shoCard===true ? <DayCard dateState={dateState} publicEvents={publicEvents} removeEvent={removeEvent} />:null}
            <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
        </CalendarContainer>
    )
}

const CalendarContainer = styled.div`
/* ~~~ container styles ~~~ */
max-width: 600px;
margin: auto;
margin-top: 20px;
background-color: #d4f7d4;
padding: 10px;
border-radius: 3px;
/* ~~~ navigation styles ~~~ */
.react-calendar__navigation {
  display: flex;
  .react-calendar__navigation__label {
    font-weight: bold;
  }
  .react-calendar__navigation__arrow {
    flex-grow: 0.333;
  }
}
/* ~~~ label styles ~~~ */
.react-calendar__month-view__weekdays {
  text-align: center;
}
/* ~~~ button styles ~~~ */
button {
  margin: 3px;
  background-color: #6f876f;
  border: 0;
  border-radius: 3px;
  color: white;
  padding: 5px 0;
  &:hover {
    background-color: #556b55;
  }
  &:active {
    background-color: #a5c1a5;
  }
}
/* ~~~ day grid styles ~~~ */
.react-calendar__month-view__days {
  display: grid !important;
  grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
  
  .react-calendar__tile {
    max-width: initial !important;
  }
  .react-calendar__tile--range {
    box-shadow: 0 0 6px 2px black;
  }
}
/* ~~~ neighboring month & weekend styles ~~~ */
.react-calendar__month-view__days__day--neighboringMonth {
  opacity: 0.7;
}
.react-calendar__month-view__days__day--weekend {
  color: #dfdfdf;
}
/* ~~~ other view styles ~~~ */
.react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
  display: grid !important;
  grid-template-columns: 20% 20% 20% 20% 20%;
  &.react-calendar__year-view__months {
    grid-template-columns: 33.3% 33.3% 33.3%;
  }
  
  .react-calendar__tile {
    max-width: initial !important;
  }
}
`;

