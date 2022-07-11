import * as dynamoose from "dynamoose";

dynamoose.aws.sdk.config.update({
  region: "us-east-1",
});

export const dynamooseModel = dynamoose.model;
