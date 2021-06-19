import { combineReducers } from 'redux'
import catsReducer from './cats/reducer'

export default combineReducers({
    data: catsReducer
})

