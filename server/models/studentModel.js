import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const Student = mongoose.model('student', StudentSchema)