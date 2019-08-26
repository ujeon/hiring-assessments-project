import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import User from "./User";
import UserProfile from "./UserProfile";

const Users = props => {
  // console.log(props);
  let renderList = props.userList.map(li => {
    return (
      <User
        key={li.id}
        name={li.name}
        userId={li.id}
        selectUser={props.selectUser}
      ></User>
    );
  });
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <ul>
        ====유저리스트====
        {renderList}
      </ul>
      <button>
        <Link to={props.selectedUserPath}>선택</Link>
      </button>
      <button>
        <Link to="/">뒤로가기</Link>
      </button>
    </div>
  );
};

export default Users;
