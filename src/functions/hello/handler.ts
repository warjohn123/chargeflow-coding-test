import type { ValidatedEventAPIGatewayProxyEvent } from "src/libs/api-gateway";
import { formatJSONResponse } from "src/libs/api-gateway";
import { middyfy } from "src/libs/lambda";

import schema from "./schema";

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(hello);
