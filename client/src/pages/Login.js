import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function App() {

	const navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault();
		const response = await fetch('http://localhost:5000/login',{
			method:'POST',
			body: JSON.stringify({
				email:email,
				password:password
			}),
			headers:{
				'Content-Type':'application/json',
			}
		})

		const data = await response.json();
		if(data.user){
			alert('Login Successfull')
			navigate('/dashboard')
		} else{
			alert('Login failed')
		}
		console.log(data);
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
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
				<input type="submit" value="Login" />
			</form>
			<button onClick={()=>navigate('/register')} >Sign up now</button>
		</div>
	)
}

export default App