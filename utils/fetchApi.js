import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '2a9f883453msha39c0a2a7519df6p1cf416jsn71a3bce9a381',
    },
  });

  return data;
}


// https://rapidapi.com/apidojo/api/bayut