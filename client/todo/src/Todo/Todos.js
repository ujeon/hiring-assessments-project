import React from "react";
import { Link } from "react-router-dom";

import Todo from "./Todo";

const Todos = props => {
  console.log(props.userData.todos);
  let todos = props.userData.todos.map(el => (
    <Todo key={el.id} text={el.title} />
  ));
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
        <Link to={props.userProfilePath}>뒤로가기</Link>
      </button>
      <select>{todos}</select>
    </div>
  );
};

export default Todos;
