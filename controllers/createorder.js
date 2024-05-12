import { Order } from '../models/order.js';

// Function to add token to waiting array
export const addToWaiting = async (req, res) => {
  //console.log(req.body)
  const { token } = req.body;
  try {
    // Check if token already exists in any status
    const existingOrder = await Order.findOne({ token });
    if (existingOrder) {
      return res.status(200).json({ message: `Token already exists and order is ${existingOrder.status}!` });
    }

    // If token doesn't exist, add it with status 'waiting'
    await Order.create({ token });
    return res.status(200).json({ message: 'Order created successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

