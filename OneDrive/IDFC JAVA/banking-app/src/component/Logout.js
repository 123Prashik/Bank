import React, { Component } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
class Logout extends Component {
  state = {};
  componentDidMount() {
    const refreshToken = localStorage.getItem("refreshToken");
    axios.delete(`/token/delete/${refreshToken}`).then((response) => {
      if (response.status === 200) {
        window.localStorage.clear();
        new Cookies().remove("token");
        window.location.assign("/login");
      }
    });
  }
  render() {
    return <></>;
  }
}

export default Logout;
