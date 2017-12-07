class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
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
  getUserList(room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }

// var me = new Person("Adam", 37);
// var description = me.getUserDescription();
// console.log(description);