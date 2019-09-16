import request from './request';

export const getUsers = () => {
  return request(`${process.env.API_URL}/users`);
};

export const postUser = () => {
  return (
    request(`${process.env.API_URL}/users`,
      {
        method: 'POST',
        body: JSON.stringify()
      })
  );
};
