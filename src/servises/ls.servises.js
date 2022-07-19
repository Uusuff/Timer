const trackLsKey = 'trackers';

export function getTrackers() {
   const item = window.localStorage.getItem(trackLsKey);
   const trackers = JSON.parse(item);
   return trackers;
};

export function updateTrackers(track){
   const trackers = JSON.stringify(track)
   window.localStorage.setItem(trackLsKey, trackers);
};