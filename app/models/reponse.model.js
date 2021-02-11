
module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define("response", {
    response: {
      type: DataTypes.STRING
    }
  });

  return Response;
};
