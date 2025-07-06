import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Product from "../../models/Product";
import connectDB from "../../config/db";
import AllProductsList from "../../components/AllProductsList";

const AllProducts = async () => {
  await connectDB();

  // Fetch and convert Mongoose documents to plain JS objects
  const mongooseProducts = await Product.find({}).lean();

  // Serialize for Client Component
  const products = JSON.parse(JSON.stringify(mongooseProducts));

  const currency = process.env.NEXT_PUBLIC_CURRENCY || "₹";

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">All products</p>
          <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
        </div>

        <AllProductsList products={products} currency={currency} />
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
