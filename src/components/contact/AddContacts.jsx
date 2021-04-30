import React, {useState} from 'react'
import generateUniqueId from 'generate-unique-id'
import { useHistory } from "react-router-dom"

const AddContacts = (props) => {
    const {addContactHandle} = props
    const history = useHistory()
    const uid = generateUniqueId()
    const [state, setState] = useState({
        id: uid,
        name: "",
        number: "",
        email: ""
    })
    const createContact = (e) =>{
        e.preventDefault()
        addContactHandle(state)
        setState({
            id: uid,
            name: "",
            number: "",
            email: ""
        })
        history.push("/")
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add Contacts</div>
            <div className="card-body">
                <form onSubmit={createContact}>
                    <div className="form-group">
                        <input type="text" className="form-control" value={state.name} placeholder="Enter your Name" onChange={(e)=> setState({...state, name: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" value={state.number} placeholder="Enter your Number" onChange={(e)=> setState({...state, number: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" value={state.email} placeholder="Enter your Email" onChange={(e)=> setState({...state, email: e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContacts
