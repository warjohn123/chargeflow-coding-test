import { Document } from "dynamoose/dist/Document";

export interface ProductType extends Document {
  id: string;
  name: string;
  description: string;
}
