import { say } from "./../index";

describe("utils ", () => {
  test("This is say test", () => {
    const consoleSpy = jest.spyOn(console, "log");
    say("hello");
    expect(consoleSpy).toHaveBeenCalledWith("hello");
  });
});
