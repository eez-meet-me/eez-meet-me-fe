import request, { setToken } from './request';


export const getAllPins = () => {
  return fetch('http://localhost:7892/api/v1/pins')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch pins';

      // remove after
      // console.log(json);
      return json;
    })
    .then(json => {
      console.log(json);
      return json;
    });
};

export const postPin = (where, address, startTime, endTime) => {
  return (
    request('http://localhost:7892/api/v1/pins', {
      method: 'Post',
      body: JSON.stringify({ where, address, startTime, endTime }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${setToken}`
      }
    })
  );
};
