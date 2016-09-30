export function fetchDogs(){
  const dogs = [{id: 1, 'name': 'Winky', 'breed': 'doggy'}]
  return {
    type:'FETCH_DOGS',
    payload: dogs
  }
}

export function fetchCats(){
  const cats = fetch('http://localhost:3000/api/v1/cats').then( response => {
    return response.json()
  }).then(cats => {
    return cats
  })

  return {
    type: 'FETCH_CATS',
    payload: cats
  }
}

export function createCat(newCat){
  let kitty = newCat
  let url = 'http://localhost:3000/api/v1/cats'
  const CatGuy = fetch(url, {  
    method: 'post',  
    headers: {  
      'Accept': 'application/json',
      "Content-type": "application/json"  
    },  
    body: JSON.stringify({cat:  kitty}) 
  }).then(response => {
    return response.json()
  }).then(cat =>{
    return cat
  })
  return {type: 'CREATE_CAT', payload: CatGuy}
} 

export function killCat(catId){
  return {
    type: 'KILL_CAT',
    payload: {id: catId}
  }
}