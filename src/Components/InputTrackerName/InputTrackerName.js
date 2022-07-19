import React, { useState } from 'react';
import './InputTrackerName.css';
import { useDispatch } from 'react-redux/es/exports';
import { addTracker } from '../../Redux/trackersSlice';
import moment from 'moment';

function InputTrackerName() {
   const [name, setName] = useState('');
   const dispatch = useDispatch();
     
   const createTracker = () => {
      dispatch(addTracker({
         id: moment().valueOf().toString(),
         trackName: name,
         timeStart: moment().valueOf(),
         time: 0,
         timeAct: 0,
         isPlay: false
      }))
      setName('')
   };

  return (
    <div className="InputTrackerName">
      <input  
         type='text'
         value={name}
         placeholder='Enter tracker name'
         onChange={(e) => setName(e.target.value)}
         onKeyPress={(event) => {
            if (event.key === 'Enter'){
               createTracker();
            }
         }}
      />
      <button className='buttonCreate' onClick={createTracker}>
         ➤
      </button>
    </div>
  );
};

export default InputTrackerName;
