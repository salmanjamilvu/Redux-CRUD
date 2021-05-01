import React from 'react'
import Avater from 'react-avatar'
import {Link} from "react-router-dom"
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Contact = ({contact, removeContact}) => {
    return (
        <tr>
            <td> <Avater name={contact.name} size="45" round={true} /> {contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.number}</td>
            <td>
                <Link to={`/edit-contacts/${contact.id}`} className="btn btn-primary"><AiFillEdit/></Link>
                <button className="btn btn-danger ml-4" onClick={()=> removeContact (contact.id)}><AiFillDelete /></button>
            </td>
        </tr>
    )
}

export default Contact
