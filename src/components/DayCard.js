import React from 'react';
import styled from 'styled-components';
import {Link, Route, Routes} from 'react-router-dom';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText} from 'mdb-react-ui-kit';
import moment from 'moment';
import DisplayDay from './DisplayDay';
import UpdateEvent from './UpdateEvent';

export default function DayCard({dateState,publicEvents,removeEvent}) {


    //renders title on specifc date
    function dateTitle(){
        if (publicEvents.find(matchesDate)){
            return publicEvents.find(matchesDate).name
        } else {
            return "nothing special"
        }
    };

    const checkDate=moment(dateState).format('MMMM Do');
    function matchesDate(event){
      return event.date == checkDate
    }

    let todaysEvents = publicEvents.filter(matchesDate)

    function handleDelete(name){
      fetch(`http://localhost:9292/our_event${name}`, {
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(()=>removeEvent(name))
    }

    console.log(dateState)
    console.log(publicEvents.filter(matchesDate))

    return(
        <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>{moment(dateState).format('MMMM Do YYYY')}</MDBCardTitle>
          <MDBCardSubTitle>Today is {dateTitle(publicEvents)} </MDBCardSubTitle>
          {todaysEvents.map(event=>
            <MDBCardText>
                {event.name}
                  <button>
                      Delete
                  </button>
                <Link style={{color: "black"}} to="/components/UpdateEvent">
                  <button>
                      Update
                  </button>
                </Link>
            </MDBCardText>)}
          <Link style={{color: "black"}} to="/components/DisplayDay">Add Event?</Link>
          <Routes>
            <Route path="/components/DisplayDay" component={DisplayDay} />
            <Route path="/components/UpdateEvent" component={UpdateEvent} />
          </Routes>
        </MDBCardBody>
      </MDBCard>
    )
}
