import React from 'react'
import Contact from './Contact'

const Components = (props) => {
    const contacts = props.Data
    const {removeContactHandle} = props
    return (
        <table className="table shadow">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {contacts.map((contact)=>(
              <Contact key={contact.id} removeContact={removeContactHandle} contact={contact} /> 
            ))}
            </tbody>
        </table>

    )
}

export default Components
