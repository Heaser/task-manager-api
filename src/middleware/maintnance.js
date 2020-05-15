/////////////////////////////////////////////////
// Change the 'isUnderMaintnance' variable
// to change the maintnance status of the website
//////////////////////////////////////////////////

const maintnanceMode = (req, res, next) => {
  const isUnderMaintnance = false;
  if (isUnderMaintnance) {
    res.status(503).send("Site is under maintnance, please try again later");
  } else {
    next();
  }
};

module.exports = maintnanceMode;
