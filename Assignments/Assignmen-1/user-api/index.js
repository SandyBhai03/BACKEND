import express from 'express';
import logger from './middleware/logger.js';
import validateUser from './middleware/validateUser.js';
import users from './users.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON and log requests
app.use(express.json());
app.use(logger);

/**
 * @route   GET /users
 * @desc    Fetch the list of all users
 */
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

/**
 * @route   GET /users/:id
 * @desc    Fetch details of a specific user by ID
 */
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
});

/**
 * @route   POST /user
 * @desc    Add a new user
 */
app.post('/user', validateUser, (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'User added successfully', user: newUser });
});

/**
 * @route   PUT /user/:id
 * @desc    Update details of an existing user
 */
app.put('/user/:id', validateUser, (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  users[index] = { ...req.body, id: req.params.id };
  res.status(200).json({ message: 'User updated', user: users[index] });
});

/**
 * @route   DELETE /user/:id
 * @desc    Delete a user by ID
 */
app.delete('/user/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  const deletedUser = users.splice(index, 1);
  res.status(200).json({ message: 'User deleted', user: deletedUser });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
