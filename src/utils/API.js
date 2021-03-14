/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=us";

// Export an object with a "search" method 
export default {
  search: function () {
    return axios.get(BASEURL);
  }
};
