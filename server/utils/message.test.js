const expect = require("expect");

const {generateMessage, generateLocationMessage} = require("./message");

describe("generateMessage", () => {
  it("should generate the correct message object", () => {
    const from = "Adam";
    const text ="Testing message";
    const message = generateMessage(from, text);

    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe("number");
  });
});

describe("generateLocationMessage", () => {
  it("should generate the correct location object", () => {
    const from = "Jake"
    const latitude = 123;
    const longitude = 456;
    const url = "https://www.google.com/maps?q=123,456";
    const message = generateLocationMessage(from, latitude, longitude);

    expect(message).toMatchObject({from, url});
    expect(typeof message.createdAt).toBe("number");
  });
});