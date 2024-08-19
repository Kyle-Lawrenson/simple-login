const bcrypt = require("bcrypt");

const hashedPassword =
  "$2b$10$DX8o1waBy81OjK8xbTsVXOlYSAnBfppQGLSXDdAeglTUvkavrV/52";
const plainTextPassword = "ThreeWordsHere";

const checkPassword = async () => {
  const result = await bcrypt.compare(plainTextPassword, hashedPassword);
  console.log(result);
};

checkPassword();