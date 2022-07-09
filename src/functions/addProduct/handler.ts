import type { ValidatedEventAPIGatewayProxyEvent } from "src/libs/api-gateway";
import { formatJSONResponse } from "../../libs/api-gateway";
import { middyfy } from "../../libs/lambda";
import { addProduct } from "../../services/product.service";

import schema from "./schema";

export const createProduct: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  try {
    const response = await addProduct(event.body as any);
    return formatJSONResponse({
      data: response,
    });
  } catch (e) {
    return formatJSONResponse({
      data: e,
    });
  }
};

export const main = middyfy(createProduct);
