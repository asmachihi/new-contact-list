import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_persons } from '../../Redux/Actions/personActions'
import ContactCard from '../Contact-Card/ContactCard'

const ContactList=()=> {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_persons())
      }, [])

    const person = useSelector(state=>state.personReducer.persons)

    return (
        <div>
            {
                person.map(personne=><ContactCard  personne={personne} key ={personne._id}/>)
                
            }
        </div>
    )
}

export default ContactList
