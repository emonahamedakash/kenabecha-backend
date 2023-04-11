const dotenv = require("dotenv");
const app = require("./app.js");
dotenv.config();

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
