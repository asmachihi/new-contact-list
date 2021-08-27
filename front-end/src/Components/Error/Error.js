import React,{useState,useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux'



export default function Error({error}) {
    const [alert,setAlert] = useState(true)
    const errors = useSelector(state=>state.userReducers.errors)
    useEffect(() => {
        setTimeout(()=>{
            setAlert(false)
        },3000)
    }, [error,errors])
    return (
       <>
       {
           alert &&
           <div className="alert alert-primary" role="alert">
           {error.msg}
           </div>
       }
       </>
    )
}
