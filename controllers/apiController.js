// controllers/apiController.js

// Sample data (in a real application, this might come from a database)
let data = [
  { id: 1, name: "Node.js", type: "JavaScript runtime" },
  { id: 2, name: "Express", type: "Web framework" },
];

// Get all data
exports.getAllData = (req, res) => {
  res.json(data);
};

// Add new data
exports.addData = (req, res) => {
  const newData = req.body;
  newData.id = data.length ? data[data.length - 1].id + 1 : 1;
  data.push(newData);
  res.status(201).json(newData);
};

// Get a single item by ID
exports.getDataById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((d) => d.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Data not found" });
  }
};
