import React from 'react';
import {connect} from 'react-redux';


function DogsIndex (props){
  return(
    <div>
      <h2>Welcome to our Dogs</h2>
      <div>{
            props.dogs.map((dog) => {
              return <div>
                <h3>{dog.name}</h3>
                <img src={dog.gifUrl} />
                 </div>})
            }
      </div>
      
    </div>
  )
}

function MapStateToProps(state){
  return {dogs: state.dogs}
}

const componentCreator = connect(MapStateToProps)
export default componentCreator(DogsIndex)