'use strict';
var DataTypes = require('sequelize/lib/data-types')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('appointments', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            date: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: {model: 'users', key: 'id'},
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: true
            },
            provider_id: {
                type: DataTypes.INTEGER,
                references: {model: 'users', key: 'id'},
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true
            },
            canceled_at: {
              type: DataTypes.DATE,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};
