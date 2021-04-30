import { ADD_CONTACT, REMOVE_CONTACT } from '../constant'

export const addContact = (contact) => {
    return{
        type: ADD_CONTACT,
        payload: contact
    }
}

export const removeContact = (contact) => {
    return{
        type: REMOVE_CONTACT,
        payload: contact
    }
}