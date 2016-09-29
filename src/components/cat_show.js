import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

class CatShow extends React.Component {

  killCat(){
    this.props.actions.killCat(this.props.cat.id)
  }

  showDeleteButton(event){
    event.target.nextElementSibling.firstChild.style.display = ''
  }

  render() {
    return (
      <div className='row'>
        <h1>{this.props.cat.name}</h1>
        <ul>
          <li>Weight: {this.props.cat.weight}</li>
        </ul>
        <img className='img-circle' src={this.props.cat.gifUrl} onMouseOver={this.showDeleteButton.bind(this)} />
        <Link to='/cats'><button type="button" className="btn btn-danger" style={{display: 'none'}} onClick={this.killCat.bind(this)}>Kill Cat</button></Link>
      </div>
    )}
}


function MapStateToProps(state, ownProps){
  if (state.cats.length > 0){

  return (
    { cat: state.cats.find( (cat) => {
        return cat.id == ownProps.params.id
      }) 
    })}
    else{
      return(
        {cat: {name: '', weight: '', breed: '', temperament: '', hobbies: [{name: ''}]}}
      )}
  
}

function mapDispatchToProps(dispatch) {
  const action = bindActionCreators(actions, dispatch)
  return {actions: action}
}

const componentCreator = connect(MapStateToProps, mapDispatchToProps)
export default componentCreator(CatShow)

