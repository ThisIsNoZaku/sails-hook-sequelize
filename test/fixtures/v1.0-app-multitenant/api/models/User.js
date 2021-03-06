/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes  : {
        name: {
            type: Sequelize.STRING
        },
        age : {
            type: Sequelize.INTEGER
        }
    },
    associations: function (modelDef) {
        User[modelDef.connection].hasMany(Image[modelDef.connection], { as: 'images', foreignKey: 'userId' });
    },
    defaultScope: function () {
        return {
            include: [
                { model: Image, as: 'images' }
            ]
        };
    },
    options     : {
        freezeTableName : false,
        tableName       : 'user',
        schema          : 'sails',
        classMethods    : {
            oneUniqueClassMethod: function () {
                return 'User class method';
            }
        },
        instanceMethods : {
            toJSON: function () {
                let obj = this.get();
                obj.ageString = '' + obj.age + ' years';
                return obj;
            }
        },
        hooks           : {}
    }
};
