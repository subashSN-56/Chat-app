// server.js
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from  '../src/routes/auth.route.js';
import userRoutes from  '../src/routes/user.route.js';
import chatRoutes from  '../src/routes/chat.route.js';
import connectDB from '../src/lib/db.js';
dotenv.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path'


const app = express();
const PORT = process.env.PORT || 5001;

const __dirname =path.resolve()

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173", // or your frontend domain
  credentials: true,               // ✅ important
}));


// Connect to MongoDB
connectDB();


app.use("/api/auth" , authRoutes);
app.use("/api/users" , userRoutes);
app.use("/api/chat" , chatRoutes);


if(process.env.NODE_ENV ==="production"){
  app.use(express.static(path.join(__dirname,"../frontend/dist")));

  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
  })
}


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
