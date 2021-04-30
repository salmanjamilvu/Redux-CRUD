import React from 'react'
import Contact from './Contact'

const Components = (props) => {
    const contacts = props.Data
    const {removeContactHandle} = props
    return (
        <table className="table shadow">
            <thead>
                <tr>
                    <td>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        </div>
                    </td>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {contacts.map((contact)=>(
              <Contact removeContact={removeContactHandle} contact={contact} /> 
            ))}
            </tbody>
        </table>

    )
}

export default Components
