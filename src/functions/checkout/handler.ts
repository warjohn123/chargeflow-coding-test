import { OrderType } from "aws-sdk/clients/outposts";
import {
  serverError,
  ValidatedEventAPIGatewayProxyEvent,
} from "src/libs/api-gateway";
import { ok } from "src/libs/api-gateway";
import { middyfy } from "src/libs/lambda";
import { publishSNS } from "src/services/email-sns.service";
import { createOrder } from "src/services/order.service";

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
