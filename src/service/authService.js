import axios from "axios";
const BASE_PATH = "https://nodejs-backend-api-playground.herokuapp.com"

export const userRegistration = async(payload,navigate) => {
     try {
       const registration = await axios.post(`${BASE_PATH }/auth/user/registration`, payload);
       navigate("/login")
      //  console.log(registration.data.data)
      alert(registration.data.message)
     }catch (error){
       console.log(error.response.data);
      alert(error.response.data.message)
     }
    };
export const userLogin = async (payload,navigate)=>{
  try{
    const loginResults = await axios.post(`${BASE_PATH }/auth/user/login`,payload)
    const getAccessToken = await axios.get(`${BASE_PATH}/auth/generate/accessToken`, {
      headers: {
          Authorization : `Bearer ${loginResults.data.data.refreshToken}`
      }
  });
  const userCredentials = {
    ...loginResults.data.data,
    accessToken: getAccessToken.data.data
  }
  localStorage.setItem("userCredentials",JSON.stringify(userCredentials));
  alert(loginResults.data.message);
  navigate("/dashboard")
  } catch(error){
    console.log(error.response.data);
    alert(error.response.data.message)
  }
};
export const userLogout = (navigate) => {
  localStorage.removeItem("userCredentials");
  navigate("/login")
};
