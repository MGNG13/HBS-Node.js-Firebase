//  configure global environment variables
const path = require('path');
const env = require('dotenv');

env.config({
  path: path.join(__dirname, '..', '.env')
});

const PORT = process.env.PORT || 3000;
const app = require('./app');

// start app
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});