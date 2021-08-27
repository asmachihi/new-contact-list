import axios from "axios"
import { GET_PERSONS } from "../Constants/personTypes"



export const get_persons=()=>async(dispatch) =>{
   try {
       const res = await axios.get('/api/person')
       dispatch({
           type: GET_PERSONS,
           payload : res.data.persons
       })
   } catch (error) {
       console.log(error)
   }
}

export const delete_person=(id)=>async(dispatch)=>{
    try {
        
        await axios.delete(`/api/person/${id}`)
        dispatch(get_persons())
        
    } catch (error) {
        console.log(error)
    }
}

export const edit_person=(id,newPerson)=>async(dispatch)=>{
    try {
        await axios.put(`/api/person/${id}`,newPerson)
        dispatch(get_persons())

    } catch (error) {
        console.log(error)
    }
}

export const add_person=(newPerson)=>async(dispatch)=>{
    try{
        await axios.post('/api/person',newPerson)
        dispatch(get_persons())
    } catch(error){
        console.log(error)
    }
}