import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  userId:{ type:String, required:true, ref: 'user' },
  name: {
    type: String,
    required: true,    
  },
  description: {
    type: String,
    required: true},

  price: {
    type: Number,
    required: true
  },
  offerPrice: {
    type: Number,
    default: 0,
    required: [true]
  },
  image: {
    type: Array, // Array of Cloudinary URLs
    required: true
  },
  category: {
    type: String,
    required: true,
  }, 
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const Product =  mongoose.models.product || mongoose.model("product", productSchema);

export default Product
