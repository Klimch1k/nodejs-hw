const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Yurii:shGBVz4DuCFYm0rP@cluster0.n16cypb.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
