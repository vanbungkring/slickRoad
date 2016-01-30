/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dat_login', {
    NM_LOGIN: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    NIP: {
      type: 'CHAR(9)',
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'dat_login',
    freezeTableName: true,
    timestamps: false
  });
};
