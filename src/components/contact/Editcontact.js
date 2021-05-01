import React, {useState} from 'react'
import { useHistory, useParams } from "react-router-dom"

const AddContacts = (props) => {
    const { id } = useParams()
    const {Data, updateContactHandle} = props
    const c = Data.find((e)=> e.id === id)
    console.log(c)
    
    const history = useHistory()
    const [state, setState] = useState({
        id: id,
        name: c.name,
        number: c.number,
        email: c.email
    })
    const createContact = (e) =>{
        e.preventDefault()
        updateContactHandle(state)
        history.push("/")
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Edit Contacts</div>
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
                    <button type="submit" className="btn btn-primary">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContacts
