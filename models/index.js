const User = require('./User');
const Theater = require('./Theater');
const Review = require('./Review')

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Review.belongsTo(Theater, {
    foreignKey: 'theater_id',
});

Theater.hasMany(Review, {
    foreignKey: 'theater_id',
});

module.exports = { User, Theater, Review };
