import { catalog } from "./handler";

describe("Catalog handler", () => {
  it("should return 200", async () => {
    const response: any = await catalog({} as any, null, null);

    expect(response.statusCode).toEqual(200);
  });
});
