import {combineReducers} from 'redux'
import userReducers from './userReducers'
import personReducer from './personReducer'


const rootReducer=combineReducers({
    userReducers,personReducer
})

export default rootReducer