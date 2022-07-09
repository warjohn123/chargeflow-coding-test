import { model } from "dynamoose";
import { TableNames } from "../enums";
import productSchema from "../schema/product.schema";
import { ProductType } from "../types/Product";

const Product = model<ProductType>(TableNames.PRODUCT, productSchema);

export default Product;
