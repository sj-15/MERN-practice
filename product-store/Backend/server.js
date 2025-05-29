import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./route/product.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Routes
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  // console.log("Serving frontend...");
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("/{*any}", (req, res) => {
    // console.log("Wildcard route hit:", req.originalUrl);
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// ✅ Start Server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
