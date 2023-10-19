import cors from 'cors';
import express from "express";
import mongoose from "mongoose";
import {PORT, MONGO_SERVER_URL} from './config.js';
import {Student} from './models/studentModel.js';
import StudentRouter from './routes/studentRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());// default values are there
// app.use(
// 	cors({
// 		origin: "http://localhost:5173",
// 		methods: ['GET','POST','PUT','DELETE'],
// 		allowedHeaders: ['Content-Type'],
// 	})
// );
app.get('/', (request, response) => {
	console.log(request);
	return response.status(200).send("Welcome");
});
app.use('/students', StudentRouter);
//connection and listener
mongoose
	.connect(MONGO_SERVER_URL)
	.then(() => {
		console.log("DB Connected");
		app.listen(PORT, () => {
			console.log("Server listening");
		});
	})
	.catch((err) => {
		console.log("Error with db connection");
	});
