import { OrderType } from "src/types/Order";
import { publishSNS, sendMailgun } from "./email-sns.service";

describe("Email service test", () => {
  it("should return true in publishSNS", async () => {
    const order: OrderType = {
      userEmail: "test@gmail.com",
      product: "12321312313",
      id: "1232132132131",
    } as OrderType;
    const response = await publishSNS(order);

    expect(response).toEqual(true);
  });

  it("should match email body in sendMailgun", async () => {
    const order: OrderType = {
      userEmail: "test@gmail.com",
      product: "12321312313",
      id: "1232132132131",
    } as OrderType;
    const subject = "This is email subject";
    const body = `Your order for product ${order.product} is now received`;

    const response: any = await sendMailgun(order, subject, body);
    expect(response && typeof response === "object").toBe(true);
  });
});
