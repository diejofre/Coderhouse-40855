import mongoose from "mongoose";
import orderModel from "./models/order.js";

const environment = async () => {
  await mongoose.connect("your mongodb url");
  /*let result = await orderModel.insertMany([
    {
      name: "veggie",
      size: "medium",
      price: 1600,
      quantity: 3,
      date: "2023-06-16",
    },
    {
      name: "muzzarella",
      size: "medium",
      price: 2500,
      quantity: 2,
      date: "2023-06-16",
    },
  ]);

  console.log(result);*/

  /*let orders = await orderModel.aggregate([
    {
      $match: { size: "medium" },
    },
    {
      $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } },
    },
    {
      $sort: { totalQuantity: -1 },
    },
    {
      $group: { _id: 1, orders: { $push: "$$ROOT" } },
    },
    {
      $project: {
        _id: 0,
        orders: "$orders",
      },
    },
    {
      $merge: {
        into: "reports",
      },
    },
  ]);

  console.log(orders);*/

  let orders = await orderModel.paginate(
    { size: "medium" },
    { limit: 3, page: 1 }
  );
  console.log(orders);
};

environment();
