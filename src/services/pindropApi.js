import request from './request';

export const getAllPins = () => {
  return fetch(`${process.env.API_URL}/pins`)
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
  return request(`${process.env.API_URL}/pins`, {
    method: 'Post',
    body: JSON.stringify({ where, address, startTime, endTime, message })
  });
};
