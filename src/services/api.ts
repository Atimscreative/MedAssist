// import axios from 'axios';

// import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// const BASEURL = import.meta.env.VITE_STAGING_BASE_URL;
const BASEURL = 'https://fakestoreapi.com';

export const api = {
  Users: {
    user: (id: string) => `/api/users/${id}`,
    userLogin: '/api/users/login',
    userRegister: '/api/users/signup',
    resetPassword: '/api/users/reset-password',
  },
  Medication: {
    medications: '/api/medications',
    all: (id: string) => `/products/${id}`,
  },
};

export const makeGetRequest = async <T = any>(
  url: string,
  //   includeAuthHeaders: boolean = true,
) => {
  const temp = await axios.get<T>(`${BASEURL}${url}`, {
    headers: {
      'x-access-token': localStorage.getItem('accessToken') as string,
      Token: `Bearer ${localStorage.getItem('accessToken') as string}`,
    },
  });
  return temp;
};

export const makePostRequest = async (
  data: any,
  url: string,
  //   includeAuthHeader: boolean = true,
) => {
  return await axios.post(`${BASEURL}${url}`, data, {
    headers: {
      'x-access-token': localStorage.getItem('accessToken') as string,
      Token: `Bearer ${localStorage.getItem('accessToken') as string}`,
    },
  });
};

export const makePatchRequest = async (
  data: any,
  url: string,
  //   includeAuthHeader: boolean = true,
) => {
  return await axios.post(`${BASEURL}${url}`, data, {
    headers: {
      'x-access-token': localStorage.getItem('accessToken') as string,
      Token: `Bearer ${localStorage.getItem('accessToken') as string}`,
    },
  });
};

export const makeDeleteRequest = async <T = any>(
  url: string,
  //   includeAuthHeaders: boolean = true,
) => {
  const temp = await axios.delete<T>(`${BASEURL}${url}`, {
    headers: {
      'x-access-token': localStorage.getItem('accessToken') as string,
      Token: `Bearer ${localStorage.getItem('accessToken') as string}`,
    },
  });
  return temp;
};

export const makeCustomGetRequest = async <T = any>(
  url: string,
  includeAuthHeaders: boolean = true,
) => {
  try {
    const headers: { [key: string]: string } = {};

    if (includeAuthHeaders) {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        headers['x-access-token'] = accessToken;
        headers['Authorization'] = `Bearer ${accessToken}`;
        headers['Token'] = `Bearer ${accessToken}`;
      } else {
        throw new Error('Access token is missing');
      }
    }

    const response = await axios.get<T>(`${BASEURL}${url}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error('Error making GET request:', error);
    throw error;
  }
};
