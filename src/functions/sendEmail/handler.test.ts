import { sendEmailHandler } from "./handler";

describe("Catalog handler", () => {
  it("should send an email successfully", async () => {
    const response: any = await sendEmailHandler({
      Records: [
        {
          Sns: {
            Message: JSON.stringify({
              userEmail: "test@gmail.com",
              product: "d3c01730-7546-49f7-8e3b-f6f03b816499",
              id: "c7a10a74-43c6-4e03-8b65-7ca2f2a42590",
            }),
          },
        },
      ],
    });

    expect(response).toEqual(true);
  });
});
