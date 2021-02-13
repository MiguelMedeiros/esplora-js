import axios from 'axios';

const start = () => {
  return axios.create({
    baseURL: process.env.ENDPOINT,
  });
};

export default () => {
  start();
  return axios.create({
    baseURL: process.env.ENDPOINT,
  })
};
