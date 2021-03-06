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

export const getFollowers = () => {
  return (
    request(`${process.env.API_URL}/users/followers`)
  );
};

export const postFollower = (email) => {
  return (
    request(`${process.env.API_URL}/users/followers`,
      {
        method: 'PATCH',
        body: JSON.stringify({ email })
      })
  );
};
