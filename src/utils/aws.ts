import AWS from "aws-sdk";
import { REGION_NAME } from "@enums/index";
AWS.config.update({ region: REGION_NAME });

export const SNS = new AWS.SNS();
