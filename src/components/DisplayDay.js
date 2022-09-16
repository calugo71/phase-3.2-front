import React, {useState,useRef} from 'react';
import moment from 'moment';

export default function DisplayDay({dailyEvents, setPublicEvents, publicEvents}) {
    const dateRef = useRef(null)
    // set up share check box
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked)
    };
    //set up ne events to be sent to Sinatra
    const [form, setForm] = useState({
        date: '',
        name: '',
        starred: false,
    })

    let handleFormChange=(e)=>{
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        setForm({
            ...form,
            [name]: value
        })
    }

    //set up POSTS to Sinatra
    function addEvent(e){
        e.preventDefault()
        let newForm = {
            ...form,
            date: moment(dateRef.current.value).format('MMMM Do'),
        }
        if (checked === true) {
            fetch('http://localhost:9292/our_event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newForm),
            }) 
            .then(res=>res.json())
            .then(data=>setPublicEvents([...publicEvents, data]))
            .catch(e=>console.log(e))
        } 
    };

    console.log(dailyEvents)
    // console.log(checked)
    // console.log(starred)
    // console.log(form)


    return (
        <>
            <form className="Submit-event-form" onSubmit={addEvent} >
                <div className="Submit-event-content">
                <h3 className="Submit-event-form-title">Add Event</h3>
                <div className="form-group mt-3">
                <label>Event</label>
                <input
                    onChange={handleFormChange}
                    id='eventname'
                    name='name'
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter Event"
                />
                </div>
                <div className="form-group mt-3">
                <label>Event Date</label>
                <input
                    ref={dateRef}
                    id='dattinput'
                    type="date"
                    name="date"
                    className="form-control mt-1"
                    placeholder="Enter Event Date"
                />
                </div>
                <label>
                Star this event?
                <input
                id='starvalue' 
                name='starred' 
                onChange={handleFormChange}
                type='checkbox' 
                />
                </label>
                <div className="d-grid gap-2 mt-3">
                <label>
                    Want to share this event?
                    <input id='publicorprivate' onChange={handleChange} type='checkbox' />
                </label>
                <div></div>
                <button type="submit" className="btn btn-primary">
                    Submit 
                </button>
                </div>
                </div>
            </form>
        </>
    )
};