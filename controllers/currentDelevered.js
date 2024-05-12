import { Order } from '../models/order.js'; 

export const getCurrentDelivered = async (req, res) => {
  try {
    // Find orders with status "waiting" and project only the "token" field
    const deliveredOrders = await Order.find({ status: "delivered" }, { token: 1 });

    // Check if any orders were found
    if (!deliveredOrders.length) {
      return res.status(200).json({ message: "No orders currently delivered." });
    }

    // Extract the token numbers from the waiting orders
    const deliveredTokens = deliveredOrders.map(order => order.token);

    // Return the list of waiting token numbers
    res.status(200).json({ deliveredTokens });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
