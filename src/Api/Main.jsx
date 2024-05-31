import axios from "axios";


export const apiValue = axios.create({
    baseURL: "https://muslim-sweets-backend.onrender.com/api/v1", // Replace with your apiValue base URL
    headers: {
      // "Content-Type": 'multipart/form-data',
      "Content-Type": 'application/json'
    },
  });