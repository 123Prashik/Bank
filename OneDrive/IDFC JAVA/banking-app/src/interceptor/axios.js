import axios from "axios";
import { Cookies } from "react-cookie";
const refreshToken = localStorage.getItem("refreshToken");
const expireTime = localStorage.getItem("expires_in");

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       axios
//         .post(`http://192.168.1.33:8080/token/${refreshToken}`)
//         .then((response) => {
//           console.log(response);
//           new Cookies().set("token", response.data.access_token);
//           window.location.reload();
//         });

//     }
//   }
// );

axios.defaults.baseURL = "http://localhost:8080";

setInterval(() => {
  if (refreshToken !== null) {
    axios
      .post(`/token/${refreshToken}`)
      .then((response) => {
        new Cookies().set("token", response.data.access_token);
        //window.location.reload();
      })
      .catch((ex) => {});
  }
}, expireTime * 1000);
