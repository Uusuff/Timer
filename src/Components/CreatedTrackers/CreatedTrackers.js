import React, {useState} from 'react';
import './CreatedTrackers.css';

function CreatedTrackers(props) {
   const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
   const [status, setStatus] = useState(false);
   const [interv, setInterv] = useState();

   let updatedMs = time.ms;
   let updatedS = time.s;
   let updatedM = time.m;
   let updatedH = time.h;

   function start() {
      run();
      setInterv(setInterval(run, 10));
      setStatus(true)
   };

   function run() {
      if(updatedM === 60){
         updatedH++;
         updatedM = 0; 
      }
      if(updatedS === 60){
         updatedM++;
         updatedS = 0; 
      }
      if(updatedMs === 100){
         updatedS++;
         updatedMs = 0; 
      }
      updatedMs++;
      return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
   };

   function pause() {
      clearInterval(interv);
      setStatus(false)
   };
  
   return (
    <div className="trackers">
      <div className='NameTracker'>
         {(props.name === '')? "No name" : props.name}
      </div>
      <div className='timer'>
         <span>
            {(time.h !== 0)?
               (time.h >= 10)? time.h : "0" + time.h + ":"
               : "" 
            }
            {(time.m >= 10)? time.m : "0" + time.m}: 
            {(time.s >= 10)? time.s : "0" + time.s}: 
            {(time.ms >= 10)? time.ms : "0" + time.ms} 
         </span>
         {(status === false)?   
            <button 
               className='buttonStart'
               onClick={start}>
            </button> : ""
         }
         {(status === true)?    
            <button 
               className='buttonPause'
               onClick={pause}>
            </button> : ""
         }
            <button
               id={props.id}
               className='buttonReset' 
               onClick={props.removeTimer}>
            </button>
      </div>
    </div>
  );
}

export default CreatedTrackers;
