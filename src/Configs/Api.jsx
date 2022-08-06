import axios from "axios";
import { useQuery } from "react-query";

export const API = axios.create({
  baseURL: "https://todo.api.devcode.gethired.id",
});

export const GetDataApi = () => {
  return useQuery("profilesCache", async () => {
    const response = await API.get("/activity-groups");
    return response.data.data;
  });
};
