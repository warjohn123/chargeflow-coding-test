import {
  serverError,
  ValidatedEventAPIGatewayProxyEvent,
  ok,
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { publishSNS } from "@services/email-sns.service";
import { createOrder } from "@services/order.service";
import { OrderType } from "src/types/Order";

import schema from "./schema";

export const checkoutHandler: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  try {
    const response: OrderType = (await createOrder(
      event.body as any
    )) as OrderType;
    await publishSNS(response as any);
    return ok({
      data: response,
    });
  } catch (e) {
    return serverError(e);
  }
};

export const main = middyfy(checkoutHandler);
