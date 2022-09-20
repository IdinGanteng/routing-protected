import axios from "axios";
import React from 'react'
const BASE_PATH = "https://nodejs-backend-api-playground.herokuapp.com"

export const userRegistration = async(payload,navigate) => {
     try {
       const registration = await axios.post(`${BASE_PATH }/auth/user/registration`, payload);
       navigate("/login")
       console.log(registration.data.data)
     }catch (error){
       console.log(error.response.data);
     }
    };
export const userLogin = async (payload,navigate)=>{
  try{
    const loginResults = await axios.post(`${BASE_PATH }/auth/user/login`,payload)
    const getAccessToken = await axios.get(`${BASE_PATH}/auth/generate/accessToken`, {
      headers: {
          Authorization : `Bearer ${loginResults.data.refreshToken}`
      }
  });
  const userCredentials = {
    ...loginResults.data,
    accessToken: getAccessToken.data
  }
  localStorage.setItem("userCredentials",JSON.stringify(userCredentials));
  navigate("/dashboard")
  } catch(error){
    console.log(error.response.data);
  }
};
export const userLogout = (navigate) => {
  localStorage.removeItem("userCredentials");
  navigate("/login")
};
