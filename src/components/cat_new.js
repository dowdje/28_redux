import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../actions'

class CatNew extends React.Component{

  constructor(props){
    super(props)
    this.buildCat = this.buildCat.bind(this)
  }

  buildCat(event){
    event.preventDefault()
    let cat = {}
    cat.name = this.refs.catName.value
    cat.weight = this.refs.catWeight.value
    cat.breed = this.refs.catBreed.value
    cat.temperament = this.refs.catTemperament.value
    this.props.actions.createCat(cat)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.buildCat}>
          <div clasName='row'>
            <label>Create your cat below:</label>
          </div>
          <div clasName='row'>
            <input ref='catName' placeholder='Name'/>
          </div>
          <div clasName='row'>
            <input ref='catWeight' placeholder='Weight'/>
          </div>
          <div className='row'>
            <input ref='catBreed' placeholder='Breed'/>
          </div>
          <div clasName='row'>
            <input ref='catTemperament' placeholder='Temperament'/>
          </div>
          <div clasName='row'>
          <input type='submit' />
          </div>
        </form>
      </div>
    )
  }
}
 

function mapDispatchToProps(dispatch) {
  const action = bindActionCreators(actions, dispatch)
  return {actions: action}
}

const componentCreator = connect(null , mapDispatchToProps)
export default componentCreator(CatNew)