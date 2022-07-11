import {
  serverError,
  ValidatedEventAPIGatewayProxyEvent,
} from "src/libs/api-gateway";
import { ok } from "../../libs/api-gateway";
import { middyfy } from "../../libs/lambda";
import { addProduct } from "../../services/product.service";

import schema from "./schema";

export const createProduct: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  try {
    const response = await addProduct(event.body as any);
    return ok({
      data: response,
    });
  } catch (e) {
    return serverError(e);
  }
};

export const main = middyfy(createProduct);
