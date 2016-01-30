/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sppt', {
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
    THN_PAJAK_SPPT: {
      type: 'CHAR(4)',
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    SIKLUS_SPPT: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    KD_KANWIL_BANK: {
      type: 'CHAR(2)',
      allowNull: false
    },
    KD_KPPBB_BANK: {
      type: 'CHAR(2)',
      allowNull: false
    },
    KD_BANK_TUNGGAL: {
      type: 'CHAR(2)',
      allowNull: false
    },
    KD_BANK_PERSEPSI: {
      type: 'CHAR(2)',
      allowNull: false
    },
    KD_TP: {
      type: 'CHAR(2)',
      allowNull: false
    },
    NM_WP_SPPT: {
      type: DataTypes.STRING,
      allowNull: false
    },
    JLN_WP_SPPT: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BLOK_KAV_NO_WP_SPPT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RW_WP_SPPT: {
      type: 'CHAR(2)',
      allowNull: true
    },
    RT_WP_SPPT: {
      type: 'CHAR(3)',
      allowNull: true
    },
    KELURAHAN_WP_SPPT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    KOTA_WP_SPPT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    KD_POS_WP_SPPT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NPWP_SPPT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NO_PERSIL_SPPT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    KD_KLS_TANAH: {
      type: 'CHAR(3)',
      allowNull: false,
      defaultValue: 'XXX'
    },
    THN_AWAL_KLS_TANAH: {
      type: 'CHAR(4)',
      allowNull: false,
      defaultValue: '1986'
    },
    KD_KLS_BNG: {
      type: 'CHAR(3)',
      allowNull: false,
      defaultValue: 'XXX'
    },
    THN_AWAL_KLS_BNG: {
      type: 'CHAR(4)',
      allowNull: false,
      defaultValue: '1986'
    },
    TGL_JATUH_TEMPO_SPPT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LUAS_BUMI_SPPT: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
      defaultValue: '0'
    },
    LUAS_BNG_SPPT: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
      defaultValue: '0'
    },
    NJOP_BUMI_SPPT: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    NJOP_BNG_SPPT: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    NJOP_SPPT: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    NJOPTKP_SPPT: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    NJKP_SPPT: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    PBB_TERHUTANG_SPPT: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    FAKTOR_PENGURANG_SPPT: {
      type: DataTypes.INTEGER(12),
      allowNull: true
    },
    PBB_YG_HARUS_DIBAYAR_SPPT: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    STATUS_PEMBAYARAN_SPPT: {
      type: 'CHAR(1)',
      allowNull: false,
      defaultValue: '0'
    },
    STATUS_TAGIHAN_SPPT: {
      type: 'CHAR(1)',
      allowNull: false,
      defaultValue: '0'
    },
    STATUS_CETAK_SPPT: {
      type: 'CHAR(1)',
      allowNull: false,
      defaultValue: '0'
    },
    TGL_TERBIT_SPPT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TGL_CETAK_SPPT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    NIP_PENCETAK_SPPT: {
      type: 'CHAR(9)',
      allowNull: false
    }
  }, {
    tableName: 'sppt',
    freezeTableName: true,
    timestamps: false
  });
};
