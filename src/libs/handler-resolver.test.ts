import { handlerPath } from "./handler-resolver";

describe("Check handler resolve function", () => {
  it("should match /libs directory", () => {
    expect(handlerPath(__dirname)).toEqual("src/libs");
  });
});
