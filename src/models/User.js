//require necessary modules
const mongoose = require("mongoose");
const { delete } = require("../../../../dl-platform/routes/geo");

//define message Schema
const messageSchema = new mongoose.Schema(
	{
		content: String
	},
	{ timestamps: true }
);

//define mongoose Schema
const userSchema = new mongoose.Schema(
	{
		avatar: Object,
		username: {
			type: String,
			required: true,
			trim: true,
			minlength: [3, "Username must containt at least 3 characters"],
			maxlength: [30, "Username cannot contain more than 30 characters"]
		},
		messages: [messageSchema]
	},
	{ timestamps: true }
);

//define static method for JSON response
userSchema.methods.toJSON = function () {
	const user = this.toObject();
	delete user.__v;
	delete user;
};

//define mongoose model
const User = mongoose.model("User", userSchema);

//export User model
module.exports = User;
