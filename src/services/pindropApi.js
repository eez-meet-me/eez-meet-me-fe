import request from './request';

export const getAllPins = () => {
  return (
    request(`${process.env.API_URL}/pins`)
  );
};

export const postPin = (where, address, startTime, endTime, message) => {
  return request(`${process.env.API_URL}/pins`, {
    method: 'POST',
    body: JSON.stringify({ where, address, startTime, endTime, message })
  });
};

export const deletePin = (pin) => {
  return request(`${process.env.API_URL}/pins/${pin._id}`, {
    method: 'DELETE'
  });
};
