import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    usertype: "user"
  };

  submitFormHandler = e => {
    e.preventDefault();
    let extendedURL = "";
    const { email, password, usertype } = this.state;
    const params = {
      email,
      password
    };
    if (usertype === "user") {
      extendedURL = "/api/login";
    } else {
      extendedURL = "/api/admin-login";
    }
    axios
      .post(`http://www.mocky.io/v2/5dfcf74b3100004ecdd2c2a2`, { params })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        this.setState({ redirect: true, userRole: res.data.userRoles[0] });
      });
  };

  onTextChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    const { redirect, userRole } = this.state;
    if (redirect) {
      if (userRole === "User")
        return <Redirect to="/ViewUserStory" role="User" />;
      else return <Redirect to="/ViewAllStories" role="Admin" />;
    }
    const storage = JSON.parse(localStorage.getItem("user"));
    if (storage && storage.userRoles[0] === "User") {
      return <Redirect to="/ViewUserStory" role="User" />;
    } else if (storage && storage.userRoles[0] === "admin") {
      return <Redirect to="/ViewAllStories" role="Admin" />;
    }

    return (
      <>
        <form onSubmit={this.submitFormHandler}>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onTextChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onTextChange}
            />
          </div>
          <div>
            <label>User Type</label>
            <input
              type="radio"
              name="usertype"
              checked={this.state.usertype === "admin"}
              value="admin"
              onChange={this.onTextChange}
            />{" "}
            Admin
            <input
              type="radio"
              name="usertype"
              checked={this.state.usertype === "user"}
              value="user"
              onChange={this.onTextChange}
            />{" "}
            User
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
