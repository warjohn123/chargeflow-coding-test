import { dynamooseModel } from "@utils/dynamoose";
import { TableNames } from "../enums";
import productSchema from "../schema/product.schema";
import { ProductType } from "../types/Product";

const Product = dynamooseModel<ProductType>(TableNames.PRODUCT, productSchema);

export default Product;
