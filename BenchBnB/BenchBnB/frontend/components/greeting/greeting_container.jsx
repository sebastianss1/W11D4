import React from 'react';
import { connect } from 'react-redux';
import {logoutUser} from '../../actions/session_actions';
import Greeting from './greeting'

const mapStateToProps = ({session, entities: {users}})=> {
    debugger
    return 
    { currentUser: users[session.id] }
}

const mapDispatchToProps = dispatch => {
    return {
    logout: () => dispatch(logoutCurrentUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)
