// import axiosClient from "../Utils/asyncRequests";

export const fetchUserdata = async () => {
  let baseUrl = "http://localhost:5000/";
  let response = { data: { message: "Anand" } };
  // const response = await axiosClient(baseUrl);
  return response;
};
