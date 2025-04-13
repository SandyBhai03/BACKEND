const User = require("../models/User");

// GET all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET user by ID
exports.getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // find user by ID
    if (!user) return res.status(404).json({ message: "User not Found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
};

// POST new user
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body); // Validated by schema
    const savedUser = await user.save(); // save in MongoDB
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update user
exports.updateUser = async (req, res) => {
 try {
  const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updateUser) return res.status(404).json({ message: "user not Found" });
  res.json(updateUser);
 } catch (err) {
  res.status(400).json( {error: err.message});
 }
};

// DELETE user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if(!deleteUser) return res.status(404).json({ message: 'User not Found' });
    res.json({ message: 'User Deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID'})
  }
};
