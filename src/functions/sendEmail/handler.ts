import { middyfy } from "src/libs/lambda";
import { sendMailgun } from "src/services/order.service";
import { OrderType } from "src/types/Order";

const sendEmail = async (event) => {
  const order: OrderType = JSON.parse(
    event.Records[0].Sns.Message
  ) as OrderType;

  try {
    await sendMailgun(order);
    return;
  } catch (e) {
    console.log("e", e);
    throw e;
  }
};

export const main = middyfy(sendEmail);
