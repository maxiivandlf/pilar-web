import axios from 'axios';

import { BASE_URL } from '../constants';

const headers = () => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return headers;
};

const POST = async (url, payload) => {
  try {
    const response = await axios.post(url, payload, headers());
    return (response && response.data) || null;
  } catch (error) {
    throw (error && error.response.data) || errorMessage;
  }
};

const UPDATE = async (url, payload) => {
  try {
    const response = await axios.put(url, payload, headers());
    return (response && response.data) || null;
  } catch (error) {
    throw (error && error.response.data) || errorMessage;
  }
};

const GET = async (url) => {
  try {
    const response = await axios.get(url, headers());
    return (response && response.data) || null;
  } catch (error) {
    throw (error && error.response.data) || errorMessage;
  }
};

const DELETE = async (url) => {
  try {
    const response = await axios.delete(url, headers());
    return (response && response.data) || null;
  } catch (error) {
    throw (error && error.response.data) || errorMessage;
  }
};

const errorMessage = {
  message: 'Error en el servidor',
  name: 'ServerError',
  statusCode: 500,
};

export default { POST, GET, DELETE, UPDATE, pokemons: `${BASE_URL}/pokemon` };
