const bcrypt = require("bcrypt");

const newPassword = "admin123"; // Replace with your actual admin password
const saltRounds = 10;

bcrypt.hash(newPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Hashed password:", hash);
});
