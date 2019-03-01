import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //Apply to all request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Delete auth header
    delete axios.header.common["Authorization"];
  }
};

export default setAuthToken;
