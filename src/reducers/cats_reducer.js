export default function catsReducer (state=[], action){
  switch(action.type){
    case 'FETCH_CATS':
      return action.payload;
    case 'CREATE_CAT':
      let cat = action.payload
      debugger
      cat.gifUrl = "http://thecatapi.com/api/images/get?format=src&type=gif"
      return [...state, cat]
    case 'KILL_CAT':
     return state.filter( (cat) => {
        return cat.id != action.payload.id
      })
      debugger
    default:
      return state;
  }
}