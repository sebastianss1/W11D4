import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

// Comment this back in after you have built the login functionality

import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
