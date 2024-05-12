import { Order } from '../models/order.js'; 

export const getCurrentReady = async (req, res) => {
  try {
    // Find orders with status "waiting" and project only the "token" field
    const readyOrders = await Order.find({ status: "ready" }, { token: 1 });

    // Check if any orders were found
    if (!readyOrders.length) {
      return res.status(200).json({ message: "No orders currently ready." });
    }

    // Extract the token numbers from the waiting orders
    const readyTokens = readyOrders.map(order => order.token);

    // Return the list of waiting token numbers
    res.status(200).json({ readyTokens });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
