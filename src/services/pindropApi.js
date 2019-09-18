import request from './request';

export const getAllPins = () => {
  return fetch('https://pindrop-alchemy.herokuapp.com/api/v1/pins')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch pins';

      // remove after
      // console.log(json);
      return json;
    })
    .then(json => {
      return json;
    });
};

export const postPin = (where, address, startTime, endTime, message) => {
  return request('https://pindrop-alchemy.herokuapp.com/api/v1/pins', {
    method: 'Post',
    body: JSON.stringify({ where, address, startTime, endTime, message })
  });
};
