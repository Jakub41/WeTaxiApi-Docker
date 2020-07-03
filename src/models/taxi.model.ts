import mongoose from 'mongoose';

// Taxi schema
const TaxiSchema = new mongoose.Schema({
  lat: String,
  lon: String,
  bonus: Boolean,
  queue: Number,
});

// Creating our model
export const Taxi = mongoose.model('Taxi', TaxiSchema);
