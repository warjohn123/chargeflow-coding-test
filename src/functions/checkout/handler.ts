import type { ValidatedEventAPIGatewayProxyEvent } from "src/libs/api-gateway";
import { formatJSONResponse } from "src/libs/api-gateway";
import { middyfy } from "src/libs/lambda";
import { Lambda } from "dynamoose/dist/aws/sdk";
import { createOrder } from "src/services/order.service";

import schema from "./schema";

const checkout: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  try {
    const response = await createOrder(event.body as any);

    const emailResponse = await new Lambda()
      .invoke({
        FunctionName: "coding-test-dev-sendEmail",
        Payload: JSON.stringify({
          order: response,
        }),
      })
      .promise();

    console.log("emailResponse", emailResponse);
    return formatJSONResponse({
      data: response,
    });
  } catch (e) {
    console.log("error", e);
    return formatJSONResponse({
      data: e,
    });
  }
};

export const main = middyfy(checkout);
