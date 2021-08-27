import { GET_PERSONS } from "../Constants/personTypes"


const initState={
    persons:[]
}

const personReducer = (state=initState,{type,payload})=>{
    switch (type) {
        case GET_PERSONS:
            return {
                ...state,persons:payload
            }
          
    
        default:
            return state
    }
}





export default personReducer