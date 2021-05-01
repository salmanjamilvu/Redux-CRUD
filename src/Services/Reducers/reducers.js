import {ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT} from '../constant'
const initialState = localStorage.getItem("contact") ? JSON.parse(localStorage.getItem("contact")) : []

export default function Contacts (state = initialState, action ){
    let item
    switch (action.type) {
        case ADD_CONTACT:
            item = [action.payload, ...state]
            localStorage.setItem("contact", JSON.stringify(item))
            return item
            
        case REMOVE_CONTACT:
            item = state.filter((t)=> t.id !== action.payload)
            localStorage.setItem("contact", JSON.stringify(item))
            return item
        case UPDATE_CONTACT:
            item = state.map((contact)=> (contact.id === action.payload.id ? action.payload : contact))
            console.log('update', item)
            localStorage.setItem("contact", JSON.stringify(item))
            return item
        default:
            return state
    }
}