import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../actions'

function CatNew(props){
  return(
    <div>
      <form onSubmit={props.actions.createCat}>
        <input type='text'/>
      </form>
    </div>
  )
}
 

function mapDispatchToProps(dispatch) {
  const action = bindActionCreators(actions, dispatch)
  return {actions: action}
}

const componentCreator = connect(null , mapDispatchToProps)
export default componentCreator(CatNew)