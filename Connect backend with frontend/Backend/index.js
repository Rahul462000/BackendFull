import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to backend😁");
});

// getting a list of five jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "A joke",
      content: "This is a joke2",
    },
    {
      id: 3,
      title: "A joke",
      content: "This is a joke3",
    },
    {
      id: 4,
      title: "A joke",
      content: "This is a joke4",
    },
  ];
  res.send(jokes);
});

// defining a port here

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
