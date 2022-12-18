import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {

		event.preventDefault();
		const response = await fetch('http://localhost:5000/register',{
			method:'POST',
			body: JSON.stringify({
				name:name,
				email:email,
				password:password
			}),
			headers:{
				'Content-Type':'application/json',
			}
		})

		const data = await response.json();
		console.log(data);

        
    }

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Register" />
			</form>
			<button onClick={()=>navigate('/login')} >Login</button>
		</div>
	)
}

export default App