import { randomUUID } from "crypto";
import Order from "src/model/order.model";
import { OrderType } from "src/types/Order";

import { getAProductById } from "src/services/product.service";
import { ProductType } from "src/types/Product";

const SENDER = "warrencaruana1@gmail.com";
const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_APIKEY,
  domain: process.env.MAILGUN_DOMAIN,
});

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

export function emailOrder(orderId: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await (
        await Order.query("id").eq(orderId).exec()
      ).populate();
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
}

export const sendMailgun = (order: any) => {
  return new Promise(async (resolve) => {
    const { userEmail, product, id } = order;

    const response = (await getAProductById(product)) as any[];
    if (!response.length) return;
    const productItem = response[0] as ProductType;

    const subject = `Order ${id.split("-")[0]} received`;
    const emailBody = `We have received your order ${productItem.name}. Thank you!`;

    const data = {
      from: SENDER,
      to: userEmail,
      subject: subject,
      html: emailBody,
    };
    mailgun.messages().send(data, function (err, body) {
      if (err) throw err;
      resolve(body);
    });
  });
};
