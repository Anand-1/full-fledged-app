import axiosClient from "../Utils/asyncRequests";

export const fetchUserdata = async () => {
  let baseUrl = "http://localhost:5000/";
  const response = await axiosClient(baseUrl);
  return response;
};
