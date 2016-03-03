module.exports = function(sequelize, DataTypes){
	var users = sequelize.define("users", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		uid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
		},
		email: {
			type: DataTypes.STRING
		},
		enabled: {
			type: DataTypes.STRING,
			defaultValue: 'yes'
		}
	}, {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	})

	return users;
}