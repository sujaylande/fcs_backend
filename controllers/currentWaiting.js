import { Order } from '../models/order.js';

export const getCurrentWaiting = async (req, res) => {
  try {
    // Find orders with status "waiting" and project only the "token" field
    const waitingOrders = await Order.find({ status: "waiting" }, { token: 1 });

    // Check if any orders were found
    if (!waitingOrders.length) {
      return res.status(200).json({ message: "No orders currently waiting." });
    }

    // Extract the token numbers from the waiting orders
    const waitingTokens = waitingOrders.map(order => order.token);

    // Return the list of waiting token numbers
    res.status(200).json({ waitingTokens });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

