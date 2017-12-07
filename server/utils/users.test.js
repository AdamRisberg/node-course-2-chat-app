const expect = require("expect");

const {Users} = require("./users");

describe("Users", () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: "1",
      name: "Mike",
      room: "Node Course"
    }, {
      id: "2",
      name: "Jen",
      room: "React Course"
    }, {
      id: "3",
      name: "Julie",
      room: "Node Course"
    }];
  });

  it("should add new user", () => {
    const users = new Users();
    const user = {
      id: "123",
      name: "Adam",
      room: "Test Room"
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should remove a user", () => {
    const user = users.removeUser("2");

    expect(users.users.length).toBe(2);
    expect(user).toEqual({id: "2", name: "Jen", room: "React Course"});
  });

  it("should not remove a user", () => {
    const user = users.removeUser("5");

    expect(users.users.length).toBe(3);
    expect(user).toBeFalsy();
  });

  it("should find user", () => {
    const user = users.getUser("3");

    expect(user).toEqual({id: "3", name: "Julie", room: "Node Course"});
  });

  it("should not find user", () => {
    const user = users.getUser("5");

    expect(user).toBeFalsy();
  });

  it("should return names for node course", () => {
    const userList = users.getUserList("Node Course");

    expect(userList).toEqual(["Mike", "Julie"]);
  });

  it("should return names for react course", () => {
    const userList = users.getUserList("React Course");

    expect(userList).toEqual(["Jen"]);
  });
});