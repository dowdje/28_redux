export function fetchDogs(){
  const dogs = [{id: 1, 'name': 'Winky', 'breed': 'doggy'}]
  return {
    type:'FETCH_DOGS',
    payload: dogs
  }
}

export function fetchCats(){
  const cats =[{id:32, name:'pieceboy', personality:'bastard', gifUrl:"http://thecatapi.com/api/images/get?format=src&type=gif"},{id: 33, name: 'weenybear', gifUrl:"http://thecatapi.com/api/images/get?format=src&type=gif"}, {id: 1, name: 'olebddyolepal', gifUrl:"http://thecatapi.com/api/images/get?format=src&type=gif"}]
  return{
    type:'FETCH_CATS',
    payload: cats
  }
}

export function createCat(){
  return {
    type:'CREATE_CAT',
    payload: {cat: 'new one'}
  }
}