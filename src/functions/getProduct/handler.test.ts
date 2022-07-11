import { createProduct } from "@functions/addProduct/handler";
import { getProduct } from "./handler";

describe("Get Product handler", () => {
  it("should return 200", async () => {
    const productName = "Espresso Machine";
    const productResponse: any = await createProduct(
      { body: { name: productName, description: "lorem ipsum" } } as any,
      null,
      null
    );

    const responseBody = JSON.parse(productResponse.body);
    const { id } = responseBody.data;

    const response: any = await getProduct(
      { pathParameters: { id } } as any,
      null,
      null
    );
    const getProductResponseBody = JSON.parse(response.body);
    const { name } = getProductResponseBody.data[0];

    expect(response.statusCode).toEqual(200);
    expect(productName).toEqual(name);
  });
});
