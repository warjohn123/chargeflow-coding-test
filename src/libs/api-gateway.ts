import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: FromSchema<S>;
};
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

export const ok = (response: Record<string, unknown>) => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

export const clientError = (responseData) => {
  return {
    statusCode: 400,
    body:
      typeof responseData === "string"
        ? responseData
        : JSON.stringify(responseData),
  };
};

export const serverError = (responseData) => {
  return {
    statusCode: 500,
    body:
      typeof responseData === "string"
        ? responseData
        : JSON.stringify(responseData),
  };
};
