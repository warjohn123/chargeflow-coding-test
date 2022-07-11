import { createProduct } from "./handler";

describe("Add product handler", () => {
  it("should return 200", async () => {
    const response: any = await createProduct(
      { body: JSON.stringify({ name: "test", description: "test" }) } as any,
      null,
      null
    );

    expect(response.statusCode).toEqual(200);
  });

  it("should return 500", async () => {
    const response: any = await createProduct({ body: {} } as any, null, null);

    expect(response.statusCode).toEqual(500);
  });
});
