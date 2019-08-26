import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const UserProfile = props => {
  return (
    <div>
      <div>
        <Link to={props.userProfilePath}>유저 프로필</Link>
        <Link to={props.userProfilePath + "/todos"}>투두</Link>
      </div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/users">뒤로가기</Link>
      </button>
      <div>
        <img alt="user profile img" src={props.userData.image}></img>
        <div>이름: {props.userData.name}</div>
        <div>이메일: {props.userData.email}</div>
        <div>모바일: {props.userData.phone}</div>
      </div>
    </div>
  );
};

export default UserProfile;
