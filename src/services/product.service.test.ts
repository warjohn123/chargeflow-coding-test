import { ProductType } from "../types/Product";
import { addProduct } from "./product.service";

describe("Product service test", () => {
  it("should create a product", async () => {
    const productObj: ProductType = {
      name: "Bag",
      description: "Brown color",
    } as ProductType;
    const response: ProductType = (await addProduct(productObj)) as ProductType;

    expect(response.id).toBeDefined();
    expect(response.name).toEqual(productObj.name);
  });
});
