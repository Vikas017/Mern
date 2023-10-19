import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'
import '../index.css';

const ShowOneStudent = () => {
	const [student, setStudent] = useState({})
	const [loading, setLoading] = useState(false)
	const {id} = useParams()

	useEffect(() => {
		setLoading(true)
		axios
			.get(`http://localhost:3000/students/${id}`)
			.then((res) => {
				setStudent(res.data)
				setLoading(false)
			})
			.catch((err)=> {
				console.log(err)
			})
	}, [])

	return (
		<div className='p-4'>
			<h1 className='text-3xl my-4'>Show Student</h1>
			{loading? <Spinner /> : 
				<div className='flex flex-col border-2 bodrer-sky-400 rounded-xl w-fit p-4'>
					<div className='my-4'>
						<span className='text-xl mr-4tex-gray-500'>ID</span>
						<span>{student.name}</span>
					</div>
					<div className='my-4'>
						<span className='text-xl mr-4tex-gray-500'>ID</span>
						<span>{student.avatar}</span>
					</div>
					<div className='my-4'>
						<span className='text-xl mr-4tex-gray-500'>ID</span>
						<span>{student.location}</span>
					</div>
				</div>
			}
		</div>
	)
}

export default ShowOneStudent;