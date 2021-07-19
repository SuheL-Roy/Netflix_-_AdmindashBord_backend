const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authrouter = require('./routes/auth')
const userRoute = require("./routes/users");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/auth', authrouter);
app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("backend server is running");
});
