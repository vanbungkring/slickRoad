/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dat_subjek_pajak', {
    SUBJEK_PAJAK_ID: {
      type: 'CHAR(30)',
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    NM_WP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'PEMILIK'
    },
    JALAN_WP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BLOK_KAV_NO_WP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RW_WP: {
      type: 'CHAR(2)',
      allowNull: true
    },
    RT_WP: {
      type: 'CHAR(3)',
      allowNull: true
    },
    KELURAHAN_WP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    KOTA_WP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    KD_POS_WP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TELP_WP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NPWP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    STATUS_PEKERJAAN_WP: {
      type: 'CHAR(1)',
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'dat_subjek_pajak',
    freezeTableName: true,
    timestamps: false
  });
};
