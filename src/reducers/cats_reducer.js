export default function catsReducer (state=[], action){
  switch(action.type){
    case 'FETCH_CATS':
      return action.payload;
    case 'CREATE_CAT':
      let cat = action.payload.cat
      cat.id = state.slice(-1)[0].id + 1
      cat.gifUrl = "http://thecatapi.com/api/images/get?format=src&type=gif"
      return [...state, cat]
    default:
      return state;
  }
}