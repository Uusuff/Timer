import React from 'react';
import './Tracker.css';
import InputTrackerName from '../InputTrackerName/InputTrackerName';
import Header from '../Header/Header';
import CreatedTrackers from '../CreatedTrackers/CreatedTrackers';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { removeTracker } from '../../Redux/trackersSlice';

function Tracker() {
   const dispatch = useDispatch();
   const trackersList = useSelector((state) =>{
      return state.trackers
   });
    
   const removeTimer = (e) => {
      dispatch(removeTracker(e.target.id)); 
   };
  
   return (
      <div className="Tracker">
         <div className="tracker">
            <Header/>
            <InputTrackerName/>
               {trackersList != null ?
                  trackersList.map(tracker => {
                     return (
                        <CreatedTrackers 
                           id={tracker.id}
                           key={tracker.id}
                           onRemove={removeTimer}
                           name={tracker.trackName} 
                           time={tracker.time}
                           isPlay={tracker.isPlay}
                           timeStart={tracker.timeStart}
                           timeAct={tracker.timeAct}
                        />
                     )
                  })
                  : ""
               }
         </div>
      </div>
   );
};

export default Tracker;
