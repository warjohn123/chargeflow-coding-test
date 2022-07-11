import { SNS } from "dynamoose/dist/aws/sdk";
import { OrderType } from "src/types/Order";
const sns = new SNS();

export async function publishSNS(order: OrderType) {
  return new Promise(async (resolve, reject) => {
    try {
      const params = {
        Message: JSON.stringify(order),
        TopicArn: "arn:aws:sns:us-east-1:641506983622:sendEmail",
      };

      sns.publish(params, (error) => {
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
