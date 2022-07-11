import { middyfy } from "@libs/lambda";
import { sendMailgun } from "@services/email-sns.service";
import { getAProductById } from "@services/product.service";
import { OrderType } from "src/types/Order";
import { ProductType } from "src/types/Product";

export const sendEmailHandler = async (event) => {
  const order: OrderType = JSON.parse(
    event.Records[0].Sns.Message
  ) as OrderType;

  const response = (await getAProductById(order.product)) as ProductType[];
  if (!response.length) return;
  const productItem = response[0] as ProductType;

  const subject = `Order ${order.id.split("-")[0]} received`;
  const emailBody = `We have received your order ${productItem.name}. Thank you!`;

  try {
    await sendMailgun(order, subject, emailBody);
    return true;
  } catch (e) {
    throw e;
  }
};

export const main = middyfy(sendEmailHandler);
