import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { fetchCats } from '../actions'

function CatNew(props){
  debugger
  return(
    <div>
    <form><input /></form>
    </div>
  )
}
 

function mapDispatchToProps(dispatch) {
  const action = bindActionCreators(fetchCats, dispatch)
  return {actions: action}
}

const componentCreator = connect(null , mapDispatchToProps)
export default componentCreator(CatNew)