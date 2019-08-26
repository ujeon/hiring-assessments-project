import React from "react";

const User = props => {
  const handleClick = () => {
    props.selectUser(props.userId);
  };

  return (
    <li onClick={handleClick}>
      <div>{props.name}</div>
    </li>
  );
};

export default User;
