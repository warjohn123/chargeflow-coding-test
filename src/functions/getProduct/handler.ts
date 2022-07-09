import type { ValidatedEventAPIGatewayProxyEvent } from "src/libs/api-gateway";
import { formatJSONResponse } from "src/libs/api-gateway";
import { middyfy } from "src/libs/lambda";
import { getAProductById } from "src/services/product.service";

const getProduct: ValidatedEventAPIGatewayProxyEvent<{}> = async (event) => {
  try {
    // console.log('event test',) event.pathParameters
    const { id } = event.pathParameters;
    console.log("id ni", id);
    const response = await getAProductById(id);
    return formatJSONResponse({
      data: response,
    });
  } catch (e) {
    return formatJSONResponse({
      data: e,
    });
  }
};

export const main = middyfy(getProduct);
