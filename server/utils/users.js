class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    if (this.checkForUsername(name, room)) {
      const user = { id, name, room };
      this.users.push(user);
      return user;
    }
    return "";
  }
  removeUser(id) {
    let foundUser;
    this.users = this.users.filter((user) => {
      if(id === user.id) {
        foundUser = user;
        return false;
      }
      return true;
    });
    return foundUser;
  }
  getUser(id) {
    return this.users.filter((user) => id === user.id)[0];
  }
  checkForUsername(name, room) {
    return this.users.every((user) => name.toLowerCase() !== user.name.toLowerCase() || room !== user.room);
  }
  getUserList(room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user.name);
    return namesArray;
  }
  getRoomList() {
    const rooms = this.users.map((user) => user.room);
    return [...new Set(rooms)];
  }
}

module.exports = {Users};