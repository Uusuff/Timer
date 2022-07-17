const trackLsKey = 'trackers';

export function pushTracker(trackersData) {
   const trackers = window.localStorage.getItem(trackLsKey);
   const pTrackers = JSON.parse(trackers);
  
   if(!trackers) {
      const strLsData = JSON.stringify([trackersData]);
      window.localStorage.setItem(trackLsKey, strLsData);
   } else {
      pTrackers.push(trackersData);
      const NewTrackers = JSON.stringify(pTrackers);
      window.localStorage.setItem(trackLsKey, NewTrackers);
   }
};

export function getTrackers() {
   const item = window.localStorage.getItem(trackLsKey);
   const trackers = JSON.parse(item);
   return trackers;
};

export function updateTrackers(track){
   const trackers = JSON.stringify(track)
   window.localStorage.setItem(trackLsKey, trackers);
};