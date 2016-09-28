import React from 'react';
import {connect} from 'react-redux';

class CatShow extends React.Component {

  constructor(props){
    super(props)
  }

  killCat(){

  }

  showDeleteButton(){
    debugger
  }

  render() {
    return (
      <div>
        <h1>{props.cat.name}</h1>
        <img className='img-circle' src={props.cat.gifUrl} onMouseOver={this.showDeleteButton.bind(this)} />
      </div>
    )}
}

function MapStateToProps(state, ownProps){
  debugger
  return (
    { 
      cat: state.cats.find( (cat) => {
        return cat.id == ownProps.params.id
      }) 
    }
  )
}

const componentCreator = connect(MapStateToProps)
export default componentCreator(CatShow)