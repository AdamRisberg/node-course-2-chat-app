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
  getUserListWithUniqueRooms() {
    return this.users.sort((a, b) => a.room > b.room).filter((user, idx, arr) => {
      if(arr.indexOf(a => a.room === user.room)) {
        return true;
      }
      return false;
    });
  }
}

module.exports = {Users};