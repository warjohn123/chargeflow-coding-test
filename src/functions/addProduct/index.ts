import schema from "./schema";
import { handlerPath } from "src/libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "addProduct",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};