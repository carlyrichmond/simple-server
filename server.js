const express = require("express");

const app = express();

const port = 3000;

app.get("/", async (req, res) => {
  res.send({
    event: {
      transaction_id: 1,
      data_set: "my-logging-app"
    },
    message: "WARN: Unable to get an interesting response"
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
