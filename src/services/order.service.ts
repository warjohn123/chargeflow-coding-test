import { randomUUID } from "crypto";
import Order from "@model/order.model";
import { OrderType } from "src/types/Order";

export function createOrder(orderObj: OrderType) {
  return new Promise(async (resolve, reject) => {
    try {
      orderObj.id = randomUUID();
      const response = await Order.create(orderObj);
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
}
