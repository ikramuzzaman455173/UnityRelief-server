import mongoose from 'mongoose';

// Define the schema for the cause
const reliefGoodSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String }, // Category is optional
  amount: { type: Number, required: true },
  details: { type: String, required: true }
});

export default mongoose.model('reliefGood', reliefGoodSchema);