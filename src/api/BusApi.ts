import axios from "axios";

axios.defaults.baseURL = "https://bus-app-json-ts.herokuapp.com";

export const busApi = {
  getCurrentBus: () => {
    return axios.get("/currentBus");
  },
  searchBusApi: (input: string) => {
    return axios.get(`/currentBus?name_like=${input}`);
  },
};
