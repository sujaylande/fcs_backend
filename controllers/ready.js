import { Order } from '../models/order.js';

// Function to move token from waiting to ready array
export const moveFromWaitingToReady = async (req, res) => {
  const { token } = req.body;

  try {
    // Find the order in waiting status
    const order = await Order.findOneAndUpdate({ token, status: 'waiting' }, { status: 'ready' });
    if (!order) {
      return res.status(400).json({ message: 'Token does not exist in waiting array, Invalid Token!' });
    }

    return res.status(200).json({ message: 'Token moved to ready status successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};