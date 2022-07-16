import React, { useState } from 'react';
import './InputTrackerName.css';
import moment from 'moment'

function InputTrackerName(props) {
   const [name, setName] = useState('');

   const createTracker = () => {
      props.setTrackers([{
          id: moment().valueOf().toString(),
          trackName: name,
      }, ...props.trackers])
      setName('')
   }

  return (
    <div className="InputTrackerName">
      <input  
         type='text'
         value={name}
         placeholder='Enter tracker name'
         onChange={(e) => setName(e.target.value)}
      />
      <button className='buttonCreate' onClick={createTracker}>
         ➤
      </button>
    </div>
  );
}

export default InputTrackerName;
