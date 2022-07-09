import { Document } from "dynamoose/dist/Document";

export interface OrderType extends Document {
  id: string;
  userEmail: string;
  product: string;
}
