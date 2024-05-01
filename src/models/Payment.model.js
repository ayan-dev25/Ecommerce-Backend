import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'Debit Card', 'UPI', 'Net Banking'],
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Completed', 'Failed'],
    default: 'Pending'
  },
  transactionId: {
    type: String,
    require: true
  },

}, { timestamps: true });

export const Payment = mongoose.model('Payment', paymentSchema);
