import React from 'react'
import Avater from 'react-avatar'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Contact = ({contact, removeContact}) => {
    return (
        <tr>
            <td>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                </div>
            </td>
            <td> <Avater name={contact.name} size="45" round={true} /> {contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.number}</td>
            <td>
                <button className="btn btn-primary"><AiFillEdit/></button>
                <button className="btn btn-danger ml-4" onClick={()=> removeContact (contact.id)}><AiFillDelete /></button>
            </td>
        </tr>
    )
}

export default Contact
