import React from 'react';
import {connect} from 'react-redux';

function CatShow(props) {
  return (
    <div>
    <h1>{props.cat.name}</h1>
    <img className='img-circle' src={props.cat.gifUrl} />
    </div>
  )
}

function MapStateToProps(state, ownProps){
  return {cat: state.cats.find((cat) => {return cat.id == ownProps.params.id})}
}

const componentCreator = connect(MapStateToProps)
export default componentCreator(CatShow)