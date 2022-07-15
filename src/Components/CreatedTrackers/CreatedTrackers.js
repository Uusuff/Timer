import React, {useState} from 'react';
import './CreatedTrackers.css';

function CreatedTrackers(props) {
   const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
   const [status, setStatus] = useState(0);
   const [interv, setInterv] = useState();
   let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

   function start() {
      run();
      setInterv(setInterval(run, 10));
      setStatus(1)
   };

   function run() {
      if(updatedM == 60){
         updatedH++;
         updatedM = 0; 
      }
      if(updatedS == 60){
         updatedM++;
         updatedS = 0; 
      }
      if(updatedMs == 100){
         updatedS++;
         updatedMs = 0; 
      }
      updatedMs++;
      return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
   };

   function pause() {
      clearInterval(interv);
      setStatus(0)
   };
   
   function reset() {
      clearInterval(interv);
      setTime({ms:0, s:0, m:0, h:0});
      setStatus(0)
   }

   return (
    <div className="trackers">
      <div className='NameTracker'>New Tracker</div>
      <div className='timer'>
         <span>
            {(time.h >= 10)? time.h : "0" + time.h}:  
            {(time.m >= 10)? time.m : "0" + time.m}: 
            {(time.s >= 10)? time.s : "0" + time.s}: 
            {(time.ms >= 10)? time.ms : "0" + time.ms} 
         </span>
         {(status == 0)?   
            <button 
               className='buttonStart'
               onClick={start}>
            </button> : ""
         }
         {(status == 1)?    
            <button 
               className='buttonPause'
               onClick={pause}>
            </button> : ""
         }
            <button
               className='buttonReset' 
               onClick={reset}>
            </button>
      </div>
    </div>
  );
}

export default CreatedTrackers;
