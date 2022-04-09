import axios from 'axios'

export const listUsers = async (todo) => {
    const response = await axios.post("/.netlify/functions/listUsers", todo);
    return response.data
  };

  export const deleteUser = async (todo) => {
    const response = await axios.post("/.netlify/functions/deleteUser", todo);
    return response.data
  };
