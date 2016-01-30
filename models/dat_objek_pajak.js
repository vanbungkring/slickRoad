/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dat_objek_pajak', {
    KD_PROPINSI: {
      type: 'CHAR(2)',
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    KD_DATI2: {
      type: 'CHAR(2)',
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    KD_KECAMATAN: {
      type: 'CHAR(3)',
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    KD_KELURAHAN: {
      type: 'CHAR(3)',
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    KD_BLOK: {
      type: 'CHAR(3)',
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    NO_URUT: {
      type: 'CHAR(4)',
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    KD_JNS_OP: {
      type: 'CHAR(1)',
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    SUBJEK_PAJAK_ID: {
      type: 'CHAR(30)',
      allowNull: false
    },
    NO_FORMULIR_SPOP: {
      type: 'CHAR(11)',
      allowNull: false
    },
    NO_PERSIL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    JALAN_OP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BLOK_KAV_NO_OP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RW_OP: {
      type: 'CHAR(2)',
      allowNull: true
    },
    RT_OP: {
      type: 'CHAR(3)',
      allowNull: true
    },
    KD_STATUS_CABANG: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    KD_STATUS_WP: {
      type: 'CHAR(1)',
      allowNull: false,
      defaultValue: '1'
    },
    TOTAL_LUAS_BUMI: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
      defaultValue: '0'
    },
    TOTAL_LUAS_BNG: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
      defaultValue: '0'
    },
    NJOP_BUMI: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    NJOP_BNG: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    STATUS_PETA_OP: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    JNS_TRANSAKSI_OP: {
      type: 'CHAR(1)',
      allowNull: false,
      defaultValue: '1'
    },
    TGL_PENDATAAN_OP: {
      type: DataTypes.DATE,
      allowNull: false
    },
    NIP_PENDATA: {
      type: 'CHAR(9)',
      allowNull: false
    },
    TGL_PEMERIKSAAN_OP: {
      type: DataTypes.DATE,
      allowNull: false
    },
    NIP_PEMERIKSA_OP: {
      type: 'CHAR(9)',
      allowNull: false
    },
    TGL_PEREKAMAN_OP: {
      type: DataTypes.DATE,
      allowNull: false
    },
    NIP_PEREKAM_OP: {
      type: 'CHAR(9)',
      allowNull: false
    }
  }, {
    tableName: 'dat_objek_pajak',
    freezeTableName: true,
    timestamps: false
  });
};
