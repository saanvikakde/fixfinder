const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Import auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Optional: test protected route
const verifyToken = require("./middleware/authMiddleware");
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected content accessed!", userId: req.userId });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
