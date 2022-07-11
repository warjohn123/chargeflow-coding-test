import {
  serverError,
  ValidatedEventAPIGatewayProxyEvent,
  ok,
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { getAllProducts } from "@services/product.service";

export const catalog: ValidatedEventAPIGatewayProxyEvent<{}> = async () => {
  try {
    const response = await getAllProducts();
    return ok({
      data: response,
    });
  } catch (e) {
    return serverError(e);
  }
};

export const main = middyfy(catalog);
