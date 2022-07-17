import React, { useState, useEffect } from 'react';
import './Tracker.css';
import InputTrackerName from '../InputTrackerName/InputTrackerName';
import Header from '../Header/Header';
import CreatedTrackers from '../CreatedTrackers/CreatedTrackers';
import { useDispatch } from 'react-redux/es/exports';
import { removeTracker } from '../../Redux/trackersSlice';
import { getTrackers } from '../../servises/ls.servises';

function Tracker() {
   const dispatch = useDispatch();
   const trackersList = getTrackers();
   const [trackers, setTracers] = useState(trackersList);
   
   const removeTimer = (e) => {
      dispatch(removeTracker(e.target.id)); 
      updateTrackList ()
   };

   function updateTrackList () { 
      setTracers(getTrackers());
   };

   // useEffect(()=>{
   //    window.addEventListener('storage', updateTrackList);
   //    return () => {
   //       window.removeEventListener('storage', updateTrackList);
   //    }
   // },[]);

   return (
      <div className="Tracker">
         <div className="tracker">
            <Header/>
            <InputTrackerName
               updateTrackList={updateTrackList}
            />
               {trackers != null ?
                  trackers.map(tracker => {
                     return (
                        <CreatedTrackers 
                           id={tracker.id}
                           key={tracker.id}
                           removeTimer={removeTimer}
                           name={tracker.trackName} 
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
