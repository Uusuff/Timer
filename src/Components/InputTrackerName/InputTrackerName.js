import React, {useState} from 'react';
import './InputTrackerName.css';

function InputTrackerName(props) {
   const [trackerName, setTrackerName] = useState();
   
  return (
    <div className="InputTrackerName">
      <input  
         type='text'
         value={trackerName}
         placeholder='Enter tracker name'
         onChange={(e) => setTrackerName(e.target.value)}
      />
      <button className='buttonCreate'>
         ➤
      </button>
    </div>
  );
}

export default InputTrackerName;
