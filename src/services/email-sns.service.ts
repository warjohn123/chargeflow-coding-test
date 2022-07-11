import { REGION_NAME } from "@enums/index";
import { SNS } from "@utils/aws";
import { OrderType } from "src/types/Order";

const SENDER = "warrencaruana1@gmail.com";
const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_APIKEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export async function publishSNS(order: OrderType) {
  return new Promise(async (resolve, reject) => {
    try {
      const params = {
        Message: JSON.stringify(order),
        TopicArn: `arn:aws:sns:${REGION_NAME}:641506983622:sendEmail`,
      };

      SNS.publish(params, (error) => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    } catch (e) {
      reject(e);
    }
  });
}

export const sendMailgun = (
  order: OrderType,
  subject: string,
  body: string
) => {
  return new Promise(async (resolve) => {
    const { userEmail } = order;

    const data = {
      from: SENDER,
      to: userEmail,
      subject: subject,
      html: body,
    };
    mailgun.messages().send(data, function (err, body) {
      if (err) throw err;
      resolve(body);
    });
  });
};
