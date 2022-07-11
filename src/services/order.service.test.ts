import { OrderType } from "src/types/Order";
import { createOrder } from "./order.service";

describe("Order service test", () => {
  it("should create an order on checkout", async () => {
    const orderObj: OrderType = {
      userEmail: "test@gmail.com",
      product: "123213213213",
    } as OrderType;

    const response: OrderType = (await createOrder(orderObj)) as OrderType;

    expect(response.id).toBeDefined();
    expect(response.userEmail).toEqual(orderObj.userEmail);
  });
});
