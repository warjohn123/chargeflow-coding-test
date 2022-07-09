import { handlerPath } from "src/libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "catalog",
      },
    },
  ],
};
