import { Schema } from "dynamoose";
import Product from "src/model/product.model";

const orderSchema = new Schema({
  id: String,
  userEmail: String,
  product: Product,
});

export default orderSchema;
