import Axios from "axios";

const axiosClient = (
  url = "",
  timeout = 0,
  isPost = false,
  postData = {},
  options = {}
) => {
  console.log("Read");
  if (isPost) {
    return Axios({
      method: "POST",
      url,
      data: postData,
      ...options,
    });
  }
  if (timeout) {
    return Axios({
      method: "GET",
      url,
      timeout,
    });
  }
  return Axios({
    method: "GET",
    url,
  });
};

export default axiosClient;
