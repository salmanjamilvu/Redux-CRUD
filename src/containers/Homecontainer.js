import {connect} from 'react-redux'
import Contacts from '../components/contact/Contacts'
import {removeContact} from '../Services/Actions/actions'

const mapStateToProps = (state) =>({
    Data: state.Contacts
})

const mapDispatchToProps =dispatch =>({
    removeContactHandle: contact => dispatch(removeContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)