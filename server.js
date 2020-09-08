const express = require("express");
const mongoose = require("mongoose")

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

//USE FOR WHEN CONNECTING TO MongoDB Atlas
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/workoutdb',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );

const app = express();

app.use(express.static("/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//NEED TO INCLUDE ROUTES
require("./controllers")(app);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});