import { clientError, ok, serverError } from "./api-gateway";

describe("API Gateway returned responses", () => {
  it("status code should be 200", () => {
    expect(ok({ sampleProp: true }).statusCode).toEqual(200);
  });

  it("client error status code should be 400", () => {
    expect(clientError("Client Error").statusCode).toEqual(400);
    expect(clientError({ message: "Error" }).statusCode).toEqual(400);
  });

  it("server error status code should be 500", () => {
    expect(serverError("Server Error").statusCode).toEqual(500);
    expect(serverError({ message: "Error" }).statusCode).toEqual(500);
  });
});
