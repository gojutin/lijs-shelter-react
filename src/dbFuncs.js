import firebase from 'firebase'

let dogsRef = firebase.database().ref('/dogs');
let catsRef = firebase.database().ref('cats');
let newCatRef = catsRef.push();
let newDogRef = dogsRef.push();

export function fetchDogs() {
  dogsRef.on('value', snapshot => {
    return snapshot.val();
  });
}

export function fetchCats() {
  catsRef.on('value', snapshot => {
    return snapshot.val();
  });
}

export function addAnimal(name, imgUrl, animal) {
  if(animal === "dogs") {
    return newDogRef.set({
      name,
      imgUrl,
    })
  }

  return newCatRef.set({
    name,
    imgUrl,
  })

}