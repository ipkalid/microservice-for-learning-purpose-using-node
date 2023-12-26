// const mongoose = require('mongoose');
// // const bcrypt = require('bcrypt');

// // Define the User schema
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true, // removes whitespace from both ends of a string
//         minlength: 3
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         // Regular expression for email validation
//         match: [/.+\@.+\..+/, 'Please fill a valid email address']
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 6
//     },
//     // Optionally, you can add other fields such as:
//     // createdAt: Date,
//     // updatedAt: Date,
//     // roles: [String],
//     // profilePicture: String,
//     // etc.
// });

// // // Pre-save hook to hash password before saving the user
// // userSchema.pre('save', async function (next) {
// //     if (!this.isModified('password')) return next();

// //     try {
// //         const salt = await bcrypt.genSalt(10);
// //         this.password = await bcrypt.hash(this.password, salt);
// //         next();
// //     } catch (error) {
// //         next(error);
// //     }
// // });

// // // Method to compare entered password with hashed password in the database
// // userSchema.methods.comparePassword = async function (candidatePassword) {
// //     return await bcrypt.compare(candidatePassword, this.password);
// // };

// // Create the model from the schema
// const User = mongoose.model('User', userSchema);

// module.exports = User;
