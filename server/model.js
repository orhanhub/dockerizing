var mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/test", {
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to db");
});

var reviewsphotosSchema = new mongoose.Schema({
  _id: Number,
  product_id: Number,
  rating: Number,
  date: Date,
  summary: String,
  body: String,
  reviewer_name: String
});

var Reviewsphoto = mongoose.model("Reviewsphoto", reviewsphotosSchema);

exports.review = () => {
  return Reviewsphoto.find().exec();
};
