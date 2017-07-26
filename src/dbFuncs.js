import firebase from 'firebase';

const db = firebase.database();

let dogsRef = db.ref('dogs');
let catsRef = db.ref('cats');

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
  if (animal === "Dogs") {
    return dogsRef.push({
      name,
      imgUrl,
    })
  } else {
    return catsRef.push({
      name,
      imgUrl,
    })
  }
}