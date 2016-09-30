import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';


function CatsIndex (props){
  return(
    <div>
      <h2>Welcome to our Cats</h2>
      <div>{props.children}</div>
      <div>{
            props.cats.map((cat, index) => {
              return <div className='row'>
                      <Link to={"/cats/" + cat.id}><h4 className='col-md-4'>{cat.name}</h4></Link>
                     </div>
              })
            }
      </div>
      
      
    </div>
  )
}

function MapStateToProps(state){
  return {cats: state.cats}
}

const componentCreator = connect(MapStateToProps)
export default componentCreator(CatsIndex)