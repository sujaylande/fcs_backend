import { Order } from '../models/order.js';

// Function to move token from ready to delivered array
export const moveFromReadyToDelivered = async (req, res) => {
  const { token } = req.body;

  try {
    // Find the order in ready status
    const order = await Order.findOneAndUpdate({ token, status: 'ready' }, { status: 'delivered' });
    if (!order) {
      return res.status(400).json({ message: 'Token does not exist in ready array, Invalid Token!' });
    }

    return res.status(200).json({ message: 'Token moved to delivered status successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};