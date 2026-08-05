const orderModel = require("../models/orderModel");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.getAllOrders();

    res.json(orders);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Server error",
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
      "Pending",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
    ];

    const normalizedStatus = allowedStatuses.find(
      (s) => s.toLowerCase() === String(status).toLowerCase()
    );

    if (!normalizedStatus) {
      return res.status(400).json({
        message: "Invalid order status",
      });
    }

    const order = await orderModel.updateOrderStatus(
      id,
      normalizedStatus
    );

    res.json(order);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// CREATE ORDER
const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    const { total, items } = req.body;

    const order = await orderModel.createOrder(
      userId,
      total,
      items
    );

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// GET MY ORDERS
const getMyOrders = async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await orderModel.getOrdersByUser(
      userId
    );

    res.json(orders);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
};