const mongoose = require ('mongoose')


mongoose.connect(
    "mongodb://localhost:27017/",
    {
      dbName: "flyWithUs",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log(err) : console.log(
        "Connected to flyWithUs database")
  );

  module.exports = mongoose;