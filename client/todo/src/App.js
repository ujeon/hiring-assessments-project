import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import Users from "./User/Users";
import UserProfile from "./User/UserProfile";
import Todos from "./Todo/Todos";

const DataRequest = require("./DataRequest");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      selectedUser: undefined
    };
  }

  //TODO 유저 리스트 가지고 오기
  getAllUsers = async () => {
    let list = await DataRequest.getAllUsersData();
    // console.log(list);
    this.setState({ userList: list });
  };

  selectUser = async id => {
    let image = await DataRequest.getUserImage();
    let todos = await DataRequest.getTodos(id);
    console.log(todos);
    let selected = this.state.userList.find(el => el.id === id);
    selected.image = image;
    selected.todos = todos;

    this.setState({ selectedUser: selected });
  };

  async componentDidMount() {
    await this.getAllUsers();
  }

  render() {
    let selectedUserPath;
    this.state.selectedUser !== undefined
      ? (selectedUserPath = `/users/${this.state.selectedUser.id}`)
      : (selectedUserPath = "/users");
    // console.log(selectedUserPath);

    let userProfilePath;
    selectedUserPath === "/users"
      ? (userProfilePath = "/FALSE_PATH")
      : (userProfilePath = selectedUserPath);
    console.log(userProfilePath);
    return (
      <div>
        {/* <h1>어플리케이션을 골라주세요</h1> */}
        <Router>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/users"
            render={() => (
              <Users
                userList={this.state.userList}
                selectUser={this.selectUser}
                selectedUserPath={selectedUserPath}
              />
            )}
          />
          <Route
            exact
            path={userProfilePath}
            render={() => (
              <UserProfile
                userData={this.state.selectedUser}
                userProfilePath={userProfilePath}
              />
            )}
          />
          <Route
            path={userProfilePath + "/todos"}
            render={() => (
              <Todos
                userData={this.state.selectedUser}
                userProfilePath={userProfilePath}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
