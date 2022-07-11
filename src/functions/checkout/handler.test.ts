import { checkoutHandler } from "./handler";

describe("Checkout handler", () => {
  it("should return 200", async () => {
    const response: any = await checkoutHandler(
      {
        body: JSON.stringify({
          userEmail: "test@gmail.com",
          product: "d3c01730-7546-49f7-8e3b-f6f03b816499",
        }),
      } as any,
      null,
      null
    );

    expect(response.statusCode).toEqual(200);
  });

  it("should return 500", async () => {
    const response: any = await checkoutHandler(
      { body: JSON.stringify({}) } as any,
      null,
      null
    );

    expect(response.statusCode).toEqual(500);
  });
});
