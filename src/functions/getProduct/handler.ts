import {
  serverError,
  ValidatedEventAPIGatewayProxyEvent,
  ok,
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { getAProductById } from "@services/product.service";

export const getProduct: ValidatedEventAPIGatewayProxyEvent<{}> = async (
  event
) => {
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
