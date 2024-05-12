import { Order } from '../models/order.js';


// Function to add token to waiting array
export const checkOrderStatus = async (req, res) => {
  const { token } = req.body;
  try {
    // Find the order and return its status
    const order = await Order.findOne({ token });
    if (!order) {
      return res.status(200).json({ message: 'Invalid Token!' });
    }

    return res.status(200).json({ message: `Your order is ${order.status}!` });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};