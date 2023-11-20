import axios from 'axios'

export const registerUser=async(values)=>{
    const ajoutUser= await axios.post('http://localhost:5002/auth/register',{...values})
}
export const getAccount = async()=>{
    const token =  localStorage.getItem('token')
    const {data} = await axios.get('http://localhost:5002/auth/moncompte',{headers:{Authorization:token}})
return data 
}