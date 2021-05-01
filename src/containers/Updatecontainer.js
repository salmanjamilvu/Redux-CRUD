import {connect} from 'react-redux'
import Editcontact from '../components/contact/Editcontact'
import {updateContact} from '../Services/Actions/actions'

const mapStateToProps = (state) =>({
    Data: state.Contacts
})

const mapDispatchToProps =dispatch =>({
    updateContactHandle: contact => dispatch(updateContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(Editcontact)