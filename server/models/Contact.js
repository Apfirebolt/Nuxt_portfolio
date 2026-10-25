// server/models/Contact.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name.'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address.'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.'],
    },
    message: {
      type: String,
      required: [true, 'Please provide a message.'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters.'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);