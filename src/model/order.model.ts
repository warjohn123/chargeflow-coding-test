import { model } from "dynamoose";
import { TableNames } from "src/enums";
import orderSchema from "src/schema/order.schema";
import { OrderType } from "src/types/Order";

const Order = model<OrderType>(TableNames.ORDER, orderSchema);

export default Order;
