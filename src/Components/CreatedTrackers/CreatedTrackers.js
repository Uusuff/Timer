import React, {useEffect, useState} from 'react';
import './CreatedTrackers.css';
import { useDispatch } from 'react-redux/es/exports';
import { pause, play, seveTimeAct } from '../../Redux/trackersSlice'
import classNames from 'classnames';

function CreatedTrackers(props) {
   const [interv, setInterv] = useState();
   const dispatch = useDispatch();
   
   function start() {
      dispatch(play(props.id));
      setInterv(setInterval(run, 10));
   };

   function stop() {
      clearInterval(interv);
      dispatch(pause({id:props.id, time:props.timeAct}));
      dispatch(seveTimeAct({id:props.id, time:0}))
   };

   function run(){
      return dispatch(seveTimeAct(props.id));
   }

   const msToTime = (num) => {
      let hours = Math.floor((num % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((num % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((num % (1000 * 60)) / 1000)
  
      const wrapZeros = (num) => (num < 10 ? '0' + num : num)

      return (
        wrapZeros(hours) + ':' + wrapZeros(minutes) + ':' + wrapZeros(seconds)
      )
    }

    useEffect(() => {
      if(props.isPlay === true){
         setInterv(setInterval(run, 10));
      }
   }, [])

   return (
    <div  className={props.isPlay === false ? classNames("trackers") : classNames("trackers", "trackersActiv")}>
      <div className={props.isPlay === false ? classNames("NameTracker") : classNames("NameTracker", "activ")}>
         {(props.name === '')? 'No name:' + props.id : props.name}
      </div>
      <div className='timer'>
         <span className={props.isPlay === false ? "" :  "activ"}>
            {msToTime(props.timeAct + props.time)}
         </span>
         {(props.isPlay === false)?   
            <button
               className="buttonStart"
               onClick={start}>
            </button> : ""
         }
         {(props.isPlay === true)?    
            <button
               className='buttonPause'
               onClick={stop}>
            </button> : ""
         }
            <button
               id={props.id}
               className='buttonReset' 
               onClick={props.onRemove}>
            </button>
      </div>
    </div>
  );
}

export default CreatedTrackers;
