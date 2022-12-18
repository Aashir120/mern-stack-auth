import React, { useEffect ,useState} from 'react'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

  const navigate = useNavigate();

  const [list, setList] = useState([])

	async function populateList() {
    console.log('helo');
		await fetch('https://aashir2-test-api.herokuapp.com/devices')
    .then((res)=>{
      res.json()
    })
    .then((res)=>{
      setList(res)
    }).catch((err)=>{
      console.log(err);
    })
    console.log(list);
  }

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      const user = jwtDecode(token)
      if(!user){
        localStorage.removeItem('token')
        navigate('/login')
      }
    }
    populateList()

  },[])
  return (
    <div><h1>Dashboard</h1>

    </div>
  )
}
