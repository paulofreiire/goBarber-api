import {DataTypes, Model} from 'sequelize';

class Appointment extends Model {
    static init(sequelize) {
        super.init(
            {
                date: DataTypes.DATE,
                canceled_at: DataTypes.DATE,
            },
            {
                sequelize,
            });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'users'});
        this.belongsTo(models.User, {foreignKey: 'provider_id', as: 'provider'})
    }
}

export default Appointment;
