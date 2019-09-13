export const getAllPins = () => {
  return fetch('http://localhost:7891/api/v1/pins')
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

