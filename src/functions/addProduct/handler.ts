import {
  ok,
  serverError,
  ValidatedEventAPIGatewayProxyEvent,
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { addProduct } from "@services/product.service";

import schema from "./schema";

export const createProduct: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  try {
    const payload = JSON.parse(event.body as any) || {};
    const response = await addProduct(payload as any);
    return ok({
      data: response,
    });
  } catch (e) {
    return serverError(e);
  }
};

export const main = middyfy(createProduct);
