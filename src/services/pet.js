import api from "./apiconfig.js";

export const getPets = async () => {
  try {
    const response = await api.get("/pets/?format=json");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPet = async (id) => {
  try {
    const response = await api.get(`/pets/${id}?format=json`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createpets = async (pets) => {
  try {
    const response = await api.post("/pets/?format=json", pets);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatepets = async (id, pets) => {
  try {
    const response = await api.put(`/pets/${id}?format=json`, pets);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletepets = async (id) => {
  try {
    const response = await api.delete(`/pets/${id}?format=json`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
