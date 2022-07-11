import { Schema } from "dynamoose";
import Product from "@model/product.model";

const orderSchema = new Schema({
  id: String,
  userEmail: String,
  product: Product,
});

export default orderSchema;
