const mongoose = require('mongoose');
const User = require('./common-models/models/userModel');

const mongoDBUri = 'mongodb://localhost:27017/demoDB';

mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');

    const newUser = new User({
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      isActive: true
    });

    newUser.save()
      .then(user => console.log('User saved:', user))
      .catch(err => console.error('Error saving user:', err));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
