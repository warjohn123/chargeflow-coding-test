import { TableNames } from "@enums/index";
import orderSchema from "@schema/order.schema";
import { OrderType } from "src/types/Order";
import { dynamooseModel } from "@utils/dynamoose";

const Order = dynamooseModel<OrderType>(TableNames.ORDER, orderSchema);

export default Order;
