import {connect} from 'react-redux'
import AddContacts from '../components/contact/AddContacts'
import {addContact} from '../Services/Actions/actions'

const mapStateToProps = (state) =>({
    Data: state.Contacts
})

const mapDispatchToProps =dispatch =>({
    addContactHandle: contact => dispatch(addContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddContacts)