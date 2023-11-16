import axios from 'axios'

export const  getAllContact=async()=>{
    const {data} = await axios.get('http://localhost:5002/contact/getAll')
    return data
}

export const addContact=async(values)=>{
    const ajoutContact= await axios.post('http://localhost:5002/contact/addContact',values)
}


export const putContact=async(id,values)=>{
    const updatContact= await axios.put(`http://localhost:5002/contact/updatContact/${id}`,values)
}

export const deletContact=async(id)=>{
    const removContact= await axios.delete(`http://localhost:5002/contact/remove/${id}`)
}

export const getUniqueContact=async(id)=>{
    const {data}= await axios.get(`http://localhost:5002/contact/unique/${id}`)
    return data
}