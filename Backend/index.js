const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");  // Import auth routes
const loginRoute = require("./routes/login"); // Import login route

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Use the auth routes
app.use("/api/auth", authRoutes);

// Use the login route
app.use("/routes", loginRoute);  // Add the new login route here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
