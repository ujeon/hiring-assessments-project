let axios = require("axios");

module.exports = {
  getAllUsersData: async () => {
    let result = await axios
      .get("https://koreanjson.com/users")
      .then(response => response.data)
      .catch(error => console.log(error));

    return result;
  },

  getUserImage: async () => {
    let result = await axios
      .get("https://randomuser.me/api/")
      .then(response => response.data.results[0].picture.large)
      .catch(error => console.log(error));

    return result;
  },

  getTodos: async id => {
    let result = await axios
      .get(`https://koreanjson.com/todos?userId=${id}`)
      .then(response => response.data)
      .catch(error => console.log(error));

    return result;
  }
};
