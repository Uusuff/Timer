import React from 'react';
import './Tracker.css';
import InputTrackerName from './Components/InputTrackerName/InputTrackerName';
import Header from './Components/Header/Header';



function Tracker() {

   return (
      <div className="App">
         <div className="tracker">
            <Header/>
            <InputTrackerName/>
         </div>
      </div>
   );
}

export default Tracker;
