import { middyfy } from "./lambda";

describe("Check middy library", () => {
  it("middyfy to contain middleware properties", () => {
    const fakeHandler = () => {};
    expect(middyfy(fakeHandler)).toHaveProperty("use");
    expect(middyfy(fakeHandler)).toHaveProperty("applyMiddleware");
  });
});
