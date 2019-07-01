"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      burger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN,
    },
    {},
  );
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
