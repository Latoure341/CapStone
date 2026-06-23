import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  useremail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  category: { type: String, required: false, default: "user" },
});

export default mongoose.model('User', userSchema);