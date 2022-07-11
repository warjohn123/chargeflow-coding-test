import {
  serverError,
  ValidatedEventAPIGatewayProxyEvent,
} from "src/libs/api-gateway";
import { ok } from "src/libs/api-gateway";
import { middyfy } from "src/libs/lambda";
import { getAProductById } from "src/services/product.service";

const getProduct: ValidatedEventAPIGatewayProxyEvent<{}> = async (event) => {
  try {
    const { id } = event.pathParameters;
    const response = await getAProductById(id);
    return ok({
      data: response,
    });
  } catch (e) {
    return serverError(e);
  }
};

export const main = middyfy(getProduct);
