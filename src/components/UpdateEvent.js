import React from 'react'

export default function UpdateEvent(){

    return (
        <>
        <form className="Submit-event-form" >
            <div className="Submit-event-content">
            <h3 className="Submit-event-form-title">Update Event</h3>
            <div className="form-group mt-3">
            <label>Event</label>
            <input
                name='name'
                type="text"
                className="form-control mt-1"
                placeholder="Enter Event"
            />
            </div>
            <div className="form-group mt-3">
            <label>Event Date</label>
            <input
                type="date"
                name="date"
                className="form-control mt-1"
                placeholder="Enter Event Date"
            />
            </div>
            <label>
            Star this event?
            <input
            name='starred' 
            type='checkbox' 
            />
            </label>
            <div className="d-grid gap-2 mt-3">
            <label>
                Want to share this event?
                <input id='publicorprivate' type='checkbox' />
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