import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import {Link} from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle}  from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import '../index.css';

function Home() {
	const [students, setStudents] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(()=>{
		console.log("use useEffect called once")
		setLoading(true)
		axios
			.get('http://localhost:3000/students')
			.then((res) => {
				console.log(`Response is : ${res.data}`);
				setStudents(res.data.data);
				setLoading(false);
				console.log(`First Student name: ${res.data[0].name}`);
			})
			.catch((err) => {
				console.log(err)
				setLoading(false)
			})
	}, []);



	return (
		<div className='p-4'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl my-8 font-bold underline'>Students List</h1>
				<Link to='/students/create'>
					<MdOutlineAddBox className='text-sky-800 text-4xl'/>
				</Link>
			</div>
			{loading ? (<Spinner />) :(
				<table className='w-full border-separate border-spacing-2'>
					
					<tbody>
						{students.map((item, index) => 
							<tr key={item._id} className='h-8'>
							<div className='flex gap-4 font-sans w-full border border-slate-950 p-sm '>
								<td className='w-24 h-24 border border-slate-700 rounded-sm'>
									<img src='https://th.bing.com/th/id/R.e6e9a5ca54fd57e4860ada0575e5cdf7?rik=unrvUJkXWfkVgQ&riu=http%3a%2f%2fimechpro.com%2fimages%2fbluedemobutton.jpg&ehk=q1wETq%2fuliNP%2f84SmRUSH6ksWlHRExiBMYz10vycvws%3d&risl=&pid=ImgRaw&r=0'
									 className='p-2 w-22 h-22 object-cover'
									 loading='lazy'/>{/*item.avatar*/}
								</td>
								<td className='flex-auto p-2'>
									<div className='flez flex-wrap text-sm'>
										{item.name}<br/>
										{item.location}
									</div>
								</td>		
								<td className=' text-center'>
									<div className='flex justify-center gap-x-4'>
										<Link to={`/students/details/${item._id}`}>
											<BsInfoCircle className='text-2xl text-green-800'/>
										</Link>
										<Link to={`/students/update/${item._id}`}>
											<AiOutlineEdit className='text-2xl text-yellow-800'/>
										</Link>
										<Link to={`/students/delete/${item._id}`}>
											<MdOutlineDelete className='text-2xl text-red-800'/>
										</Link>
										
									</div>
								</td>
							</div>
								
							</tr>
						)}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Home;