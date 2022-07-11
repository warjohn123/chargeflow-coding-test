import { randomUUID } from "crypto";
import Product from "../model/product.model";
import { ProductType } from "../types/Product";

export function addProduct(productObj: ProductType) {
  return new Promise(async (resolve, reject) => {
    try {
      productObj.id = randomUUID();
      const response = await Product.create(productObj);
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
}

export function getAllProducts() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Product.scan().exec();
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
}

export function getAProductById(productId: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Product.query("id").eq(productId).exec();
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
}
