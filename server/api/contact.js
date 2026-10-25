import mongoose from 'mongoose';
import Contact from '../models/Contact';

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  
  const config = useRuntimeConfig();
  const uri = config.mongodbUri || process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside your .env file');
  }

  await mongoose.connect(uri);
}

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  try {
    await connectDB();

    // Handle POST Request (Form Submission)
    if (method === 'POST') {
      const body = await readBody(event);
      const { name, email, message } = body || {};

      // Basic Validation
      if (!name || typeof name !== 'string' || name.trim() === '') {
        throw createError({ statusCode: 400, statusMessage: 'Please provide a valid name.' });
      }

      if (!email || typeof email !== 'string' || !email.includes('@')) {
        throw createError({ statusCode: 400, statusMessage: 'Please provide a valid email address.' });
      }

      if (!message || typeof message !== 'string' || message.trim() === '') {
        throw createError({ statusCode: 400, statusMessage: 'Please provide a message.' });
      }

      // Save to MongoDB
      const newContact = await Contact.create({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      return {
        statusCode: 201,
        message: 'Message sent successfully!',
        contact: newContact,
      };
    }

    // Handle GET Request (Fetch Messages)
    if (method === 'GET') {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return {
        statusCode: 200,
        contacts,
      };
    }

    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' });

  } catch (error) {
    console.error('Contact API error:', error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Internal server error. Please try again later.',
    });
  }
});