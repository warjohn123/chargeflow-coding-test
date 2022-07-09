import { Schema } from "dynamoose";

const productSchema = new Schema({
  id: String,
  name: String,
  description: String,
});

export default productSchema;
