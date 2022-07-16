import React, { useState } from 'react';
import './Tracker.css';
import InputTrackerName from './Components/InputTrackerName/InputTrackerName';
import Header from './Components/Header/Header';
import CreatedTrackers from './Components/CreatedTrackers/CreatedTrackers';



function Tracker() {
   const [trackers, setTrackers] = useState([]);
   
  const removeTimer = (e) => {
      setTrackers(trackers.filter(track => {
          if (track.id !== e.target.id) return true
      }))
  }

   return (
      <div className="App">
         <div className="tracker">
            <Header/>
            <InputTrackerName
               setTrackers={setTrackers}
               trackers={trackers}
            />
            {trackers.length > 0 && trackers.map(tracker => {
                return (
                  <CreatedTrackers 
                     id={tracker.id}
                     key={tracker.id}
                     removeTimer={removeTimer}
                     name={tracker.trackName} 
                  />
                )
            })}
         </div>
      </div>
   );
}

export default Tracker;
