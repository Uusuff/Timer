import React, { useState } from 'react';
import './InputTrackerName.css';
import { useDispatch } from 'react-redux/es/exports';
import { addTracker } from '../../Redux/trackersSlice';
import moment from 'moment';

function InputTrackerName(props) {
   const [name, setName] = useState('');
   
   const dispatch = useDispatch();
     
   const createTracker = () => {
      dispatch(addTracker({
         id: moment().valueOf().toString(),
         trackName: name
      }))
      setName('')
      props.updateTrackList();
   };

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
};

export default InputTrackerName;
