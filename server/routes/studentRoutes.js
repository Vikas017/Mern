import express from 'express';
import {Student} from '../models/studentModel.js';

const StudentRouter = express.Router();

//route for save new book
StudentRouter.post("/", async (req, res) => {
	try {
		//if fields are empty
		console.log("Starting");
		if (!req.body.name || !req.body.avatar || !req.body.location) {
			return res.status(400).send({message: "One or more fields are empty!"});
		}
		//else
		const newStudent = {
			name: req.body.name,
			avatar: req.body.avatar,
			location: req.body.location,
		};
		console.log("Await starting");
		const student = await Student.create(newStudent);
		return res.status(200).send(student);
	} catch(err) {
		console.log(err.message);
		res.status(500).send({message: err.message});
	}
});

//route for get books
StudentRouter.get("/", async (req, res) => {
	try {
		const students = await Student.find({});
		return res.status(200).json({
			count: students.length,
			data: students
		});
	} catch(err) {
		console.log(err.message);
		res.status(500).send({message: err.message});
	}
});
//route for get one book from db
StudentRouter.get("/:id", async (req, res) => {
	try {
		const {id} = req.params;

		const student = await Student.findById(id);
		return res.status(200).json(student);
	} catch(err) {
		console.log(err.message);
		res.status(500).send({message: err.message});
	}
});

//route for update one book from db
StudentRouter.put("/:id", async (req, res) => {
	try {
		if (!req.body.name|| !req.body.avatar || !req.body.location ) {
			return res.status(400).send({message: "One or more field empty"});
		}
		const {id} = req.params;
		const result = await Student.findByIdAndUpdate(id, req.body);
		if (!result) {
			return res.status(404).json({message: "Book Not Found"});
		}
		return res.status(200).send({message: "Student Updated"});
	} catch(err) {
		console.log(err.message);
		return res.status(500).send({message: err.message});
	}
});

//route for delete one book from db
StudentRouter.delete("/:id", async (req, res) => {
	try {
		const {id} = req.params;
		const result = await Student.findByIdAndDelete(id);
		if (!result) {
			return res.status(404).json({message: "Student Not Found"});
		}
		return res.status(200).send({message: "Student Deleted"});
	} catch(err) {
		console.log(err.message);
		return res.status(500).send({message: err.message});
	}
});

export default StudentRouter;