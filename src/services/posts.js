import seed from "../seed/seed.json";
// import api from "./apiConfig";

// export const getPosts = async () => {
//   try {
//     const response = await api.get("/posts");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getPost = async (title) => {
//   try {
//     const response = await api.get(`/posts/${id}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getPosts = () => {
  return seed;
};
