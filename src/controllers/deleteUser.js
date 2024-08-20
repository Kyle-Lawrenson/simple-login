const User = require("../db/models/users");
 
const deleteUser = async (req, res) => {
  try {
    const result = await User.destroy({where: {username: req.body.username}})
 
    res.status(201).json({
        message: `User ${req.body.username} has been removed`
    })
  } catch (error) {
    console.log(error);
    res.status(418).json({
      message: "Something has gone wrong",
      error: error,
    });
  }
};
 
module.exports = deleteUser;