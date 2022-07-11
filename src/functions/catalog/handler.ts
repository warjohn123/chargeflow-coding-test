import {
  serverError,
  ValidatedEventAPIGatewayProxyEvent,
} from "src/libs/api-gateway";
import { ok } from "src/libs/api-gateway";
import { middyfy } from "src/libs/lambda";
import { getAllProducts } from "src/services/product.service";

const catalog: ValidatedEventAPIGatewayProxyEvent<{}> = async () => {
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
