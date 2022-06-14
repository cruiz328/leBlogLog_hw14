const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create Post model
class Post extends Model {}

Post.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        post_text: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id'
          }
        }
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
      }
);

// // Alex's Post model
// class Post extends Model {}
// // create fields/columns for Post model
// Post.init(
//   {
//       title: DataTypes.STRING,
//       post_text: DataTypes.STRING
//   },
//   {
//     sequelize
//   }
// );


module.exports = Post;