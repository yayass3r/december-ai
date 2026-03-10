import express from "express";
import chatRoutes from "./routes/chat";
import containerRoutes from "./routes/containers";

const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ 
    status: "ok", 
    service: "December AI Backend",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

// Health check for Render
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use("/containers", containerRoutes);
app.use("/chat", chatRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`December AI Backend running on port ${PORT}`);
  console.log(`Health check: http://0.0.0.0:${PORT}/health`);
});

export default app;
