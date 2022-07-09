import type { ValidatedEventAPIGatewayProxyEvent } from "src/libs/api-gateway";
import { formatJSONResponse } from "src/libs/api-gateway";
import { middyfy } from "src/libs/lambda";
import { getAllProducts } from "src/services/product.service";

const catalog: ValidatedEventAPIGatewayProxyEvent<{}> = async () => {
  try {
    const response = await getAllProducts();
    return formatJSONResponse({
      data: response,
    });
  } catch (e) {
    return formatJSONResponse({
      data: e,
    });
  }
};

export const main = middyfy(catalog);
