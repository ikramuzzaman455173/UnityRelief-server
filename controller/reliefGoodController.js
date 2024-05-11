import ReliefGood from '../model/reliefGoods.js';

// Create a new ReliefGood
export const createReliefGood = async (req, res) => {
  try {
    const { image, title, category, amount, details } = req.body;
    const newReliefGood = new ReliefGood({ image, title, category, amount, details });

    // Save the new ReliefGood to the database
    const savedReliefGood = await newReliefGood.save();

    // Respond with the created ReliefGood
    res.status(201).json(savedReliefGood);
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    // Handle other errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all ReliefGoods
export const getAllReliefGoods = async (req, res) => {
  try {
    // Retrieve all ReliefGoods from the database
    const reliefGoods = await ReliefGood.find({});
    // Respond with the retrieved ReliefGoods
    res.status(200).json(reliefGoods);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single ReliefGood by ID
export const getReliefGoodById = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the ReliefGood with the specified ID
    const reliefGood = await ReliefGood.findById(id);
    // Check if the ReliefGood exists
    if (!reliefGood) {
      return res.status(404).json({ error: 'ReliefGood not found' });
    }
    // Respond with the retrieved ReliefGood
    res.status(200).json(reliefGood);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a ReliefGood by ID
export const updateReliefGoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, category, amount, details } = req.body;

    // Find and update the ReliefGood with the specified ID
    const updatedReliefGood = await ReliefGood.findByIdAndUpdate(id, { image, title, category, amount, details }, { new: true });

    // Check if the ReliefGood exists
    if (!updatedReliefGood) {
      return res.status(404).json({ error: 'ReliefGood not found' });
    }
    // Respond with the updated ReliefGood
    res.status(200).json(updatedReliefGood);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a ReliefGood by ID
export const deleteReliefGoodById = async (req, res) => {
  try {
    const { id } = req.params;
    // Find and delete the ReliefGood with the specified ID
    const deletedReliefGood = await ReliefGood.findByIdAndDelete(id);

    // Check if the ReliefGood exists
    if (!deletedReliefGood) {
      return res.status(404).json({ error: 'ReliefGood not found' });
    }
    // Respond with success message
    res.status(200).json({ message: 'ReliefGood deleted successfully' });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
