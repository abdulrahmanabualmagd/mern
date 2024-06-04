const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'Must be at least 18'],
        max: [65, 'Must be at most 65']
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Email is invalid'],
        validate: {
            validator: async function(v) {
                const emailCount = await mongoose.models.User.countDocuments({ email: v });
                return emailCount === 0;
            },
            message: props => `${props.value} is already registered!`
        }
    },
    username: {
        type: String,
        required: true,
        validate: {
            validator: async function(v) {
                const userCount = await mongoose.models.User.countDocuments({ username: v });
                return userCount === 0;
            },
            message: props => `${props.value} is already taken!`
        }
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'guest'],
        default: 'user'
    }
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));
