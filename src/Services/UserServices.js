import axios from 'axios'

export const createUser = async (body) => {
    const response = await axios.post("/.netlify/functions/createUser", body);
    return response.data
  };

 export const updateUser = async (body) => {
    const response = await axios.post("/.netlify/functions/updateUser", body);
    return response.data
  };

  export const authenticate = async (body) => {
    const response = await axios.post("/.netlify/functions/authenticate", body);
    return response.data
  };



  //service
  export const listService = async (body) => {
    const response = await axios.post("/.netlify/functions/listService", body);
    return response.data
  };

  export const createService = async (body) => {
    const response = await axios.post("/.netlify/functions/createService", body);
    return response.data
  };

//pets

export const listPets = async (body) => {
  const response = await axios.post("/.netlify/functions/listPets", body);
  return response.data
};

export const createPets = async (body) => {
  const response = await axios.post("/.netlify/functions/createPet", body);
  return response.data
};

//appointments

export const listAppointments = async (body) => {
  const response = await axios.post("/.netlify/functions/listAppointments", body);
  return response.data
};

export const createAppointments = async (body) => {
  const response = await axios.post("/.netlify/functions/createAppointment", body);
  return response.data
};





