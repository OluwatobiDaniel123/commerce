const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const Product = require("./models/Product");

const me = "https://i.ibb.co/tCR5JGx/Screenshot-2024-08-11-150732.png";
const me2 = "https://i.ibb.co/3sxT0b3/Screenshot-2024-08-11-150822.png";
const me3 = "https://i.ibb.co/7ny06vs/Screenshot-2024-08-11-150812.png";
const me4 = "https://i.ibb.co/8xfdX6p/img.png";
const me5 = "https://i.ibb.co/mS6fsYN/Screenshot-2024-08-11-150836.png";
const me6 = "https://i.ibb.co/9NmC0ZK/img2.png";
const me7 = "https://i.ibb.co/Xk16MRH/img4.png";
const me8 = "https://i.ibb.co/9NmC0ZK/img2.png";

const sampleProducts = [
  {
    title: "Product1",
    desc: "Description for product 1",
    img: me,
    categories: ["Category1"],
    size: ["S", "M"],
    color: ["Red"],
    price: 29.99,
    inStock: true,
  },
  {
    title: "Product2",
    desc: "Description for product 2",
    img: me2,
    categories: ["Category2"],
    size: ["L", "XL"],
    color: ["Blue"],
    price: 28.99,
    inStock: true,
  },
  {
    title: "Product3",
    desc: "Description for product 1",
    img: me3,
    categories: ["Category1"],
    size: ["S", "M"],
    color: ["Red"],
    price: 29.99,
    inStock: true,
  },
  {
    title: "Product4",
    desc: "Description for product 2",
    img: me4,
    categories: ["Category2"],
    size: ["L", "XL"],
    color: ["Blue"],
    price: 43.99,
    inStock: true,
  },
  {
    title: "Product5",
    desc: "Description for product 2",
    img: me5,
    categories: ["Category2"],
    size: ["L", "XL"],
    color: ["Blue"],
    price: 12.99,
    inStock: true,
  },
  {
    title: "Product6",
    desc: "Description for product 2",
    img: me6,
    categories: ["Category2"],
    size: ["L", "XL"],
    color: ["Blue"],
    price: 64.99,
    inStock: true,
  },
  {
    title: "Product7",
    desc: "Description for product 2",
    img: me7,
    categories: ["Category2"],
    size: ["L", "XL"],
    color: ["Blue"],
    price: 29.99,
    inStock: true,
  },
  {
    title: "Product8",
    desc: "Description for product 2",
    img: me8,
    categories: ["Category2"],
    size: ["L", "XL"],
    color: ["Blue"],
    price: 59.99,
    inStock: true,
  },
  // Add more products as needed
];

// Product.insertMany(sampleProducts)
//   .then(() => {
//     console.log("Sample products inserted");
//   })
//   .catch((err) => {
//     console.error("Error inserting sample products:", err);
//     mongoose.connection.close(); // Close the connection even if there is an error
//   });

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
