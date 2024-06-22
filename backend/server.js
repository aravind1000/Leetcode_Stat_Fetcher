const express = require('express');
const leetcodeRouter = require('./routes/leetcode');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/leetcode', leetcodeRouter);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
