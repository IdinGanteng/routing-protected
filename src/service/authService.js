import axios from "axios";
import React from 'react'
const BASE_PATH = "https://nodejs-backend-api-playground.herokuapp.com"

export const userRegistrasion = async(payload) => {
  return (

      await axios.post(`${BASE_PATH }/auth/user/registration`)
  )
}

export default authService