import { DataTypes } from 'sequelize'

export default (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isEmailConfirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      confirmationToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    },
  )

  return User
}
