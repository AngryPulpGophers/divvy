import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import {updateUserInfo} from '../actions/authActions'

class PageProfile extends Component {

  constructor(props){
    super(props)
    if(!this.props.isAuthed){
      browserHistory.push('/login')
    }
  }
  render() {

    const myInitialValues = {
      initialValues: {
        name: this.props.userInfo.name,
        email: this.props.userInfo.email,
        username: this.props.userInfo.username
      }
    }

    return (
     <Profile 
        {...myInitialValues}
        userInfo = {this.props.userInfo}
        updateUserInfo = {this.props.updateUserInfo}
     />
    )
  }
}

function mapStateToProps(state) {
  return {
   userInfo : state.auth.userInfo,
   isAuthed: state.auth.isAuthed,
  }
}


// injection to child
export default connect(mapStateToProps, {
  updateUserInfo
})(PageProfile);

