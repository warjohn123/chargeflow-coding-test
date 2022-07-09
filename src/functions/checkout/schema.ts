export default {
  type: "object",
  properties: {
    userEmail: { type: "string" },
    product: { type: "string" },
  },
  required: ["userEmail", "product"],
} as const;
